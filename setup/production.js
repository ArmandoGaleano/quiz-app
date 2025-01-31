import Listr from 'listr';
import waitOn from 'wait-on';
import { execa } from 'execa';
import { checkMySQLReady } from './utils/checkMySQLReady.js';

const { DB_HOST, DB_PORT } = process.env ?? {
  DB_HOST: 'mysql_db',
  DB_PORT: 3306,
};

const waitOptions = {
  resources: [`tcp:${DB_HOST}:${DB_PORT}`], // Aguarda a porta do banco
  timeout: 300000, // 5 minutos
  interval: 3000, // Checa a cada 3 segundo
  tcpTimeout: 1000, // Timeout por conexão
  log: true, // Logs no terminal
};

export const productionTasks = new Listr([
  {
    title: 'Verificando disponibilidade do banco de dados',
    task: async () => {
      console.log(`🔄 Aguardando conexão na porta ${DB_PORT} [MySQL]`);
      await waitOn(waitOptions).catch((err) => {
        console.error('❌ Erro ao aguardar o MySQL:', err);
        process.exit(1);
      });
      console.log(`✅ Banco de dados disponível na porta ${DB_PORT}!`);
    },
  },
  {
    title: 'Verificando se o MySQL está pronto para conexões',
    task: async () => {
      await checkMySQLReady();
    },
  },
  {
    title: 'Gerando Prisma Client',
    task: async () => {
      console.log('🔄 Gerando Prisma Client...');
      try {
        await execa('npx', ['prisma', 'generate'], {
          env: process.env,
        });
        console.log('✅ Prisma Client gerado com sucesso.');
      } catch (err) {
        console.error('❌ Erro ao gerar Prisma Client:', err);
        process.exit(1);
      }
    },
  },
  {
    title: 'Aplicando migrações no banco de produção',
    task: async () => {
      console.log('📄 Aplicando migrações...');
      await execa(
        'npx',
        ['prisma', 'migrate', 'deploy', '--schema=./prisma/schema'],
        {
          env: process.env,
        },
      );
      console.log('✅ Migrações aplicadas com sucesso.');
    },
  },
  {
    title: 'Verificando o status das migrações após o deploy',
    task: async () => {
      const { stdout } = await execa(
        'npx',
        ['prisma', 'migrate', 'status', '--schema=./prisma/schema'],
        {
          env: process.env,
        },
      );
      console.log(stdout);

      if (stdout.includes('There are unapplied migrations')) {
        console.warn(
          '⚠️ Há migrações pendentes. Verifique o ambiente e reaplique.',
        );
        process.exit(1);
      } else {
        console.log('✅ Banco de dados está sincronizado após o deploy.');
      }
    },
  },
  {
    title: 'Inicializando o servidor em produção',
    task: async () => {
      console.log('🚀 Inicializando o servidor em produção...');
      await execa('node', ['./build/server.cjs'], {
        env: process.env,
      });
    },
  },
]);
