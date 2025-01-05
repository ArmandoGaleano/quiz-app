import { fileURLToPath } from 'url';
import path from 'path';

import { execa } from 'execa';
import Listr from 'listr';
import waitOn from 'wait-on';

import { checkMySQLReady } from './utils/checkMySQLReady.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '../');

const { DB_HOST = 'mysql_db', DB_PORT = 3306 } = process.env ?? {
  DB_HOST: 'mysql_db',
  DB_PORT: 3306,
};

const waitOptions = {
  resources: [`tcp:${DB_HOST}:${DB_PORT}`], // Aguarda a porta do banco
  timeout: 30000, // 30 segundos
  interval: 1000, // Checa a cada 1 segundo
  tcpTimeout: 1000, // Timeout por conexão
  log: true, // Logs no terminal
};

export const developmentTasks = new Listr([
  {
    title: 'Checking database availability',
    task: async () => {
      console.log(`🔄 Waiting for connection on port ${DB_PORT} [MySQL]`);
      await waitOn(waitOptions).catch((err) => {
        console.error('❌ Error waiting for MySQL:', err);
        process.exit(1);
      });
      console.log(`✅ Database available on the port ${DB_PORT}!`);
    },
  },
  {
    title: 'Verificando se o MySQL está pronto para conexões',
    task: async () => {
      await checkMySQLReady();
    },
  },
  {
    title: '🚀 Inicializando o servidor de desenvolvimento...',
    task: async () => {
      execa('npx', ['nodemon'], {
        stdio: 'inherit',
        cwd: root,
        env: process.env,
      }).catch((err) => {
        console.error('Erro ao inicializar nodemon:', err);
        process.exit(1);
      });
    },
  },
]);
