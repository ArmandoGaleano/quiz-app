import mysql from 'mysql2/promise';

console.log();

export const checkMySQLReady = async () => {
  const maxAttempts = 10; // Número máximo de tentativas
  const interval = 3000; // Intervalo entre as tentativas (em ms)
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      console.log(
        `🔄 Tentativa ${attempt + 1} de conexão ao banco de dados...`,
      );
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'mysql_db',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'quiz_user',
        password: process.env.DB_PASSWORD || 'password',
      });

      // Executa uma query simples para validar a conexão
      await connection.query('SELECT 1');
      console.log('✅ Banco de dados pronto para conexões!');
      await connection.end();
      return; // Sai do loop caso a conexão seja bem-sucedida
    } catch (error) {
      attempt++;
      console.warn(
        `⚠️ Conexão falhou (${attempt}/${maxAttempts}): ${error.message}`,
      );

      if (attempt >= maxAttempts) {
        console.error(
          '❌ Não foi possível conectar ao MySQL após várias tentativas.',
        );
        process.exit(1); // Encerra o processo em caso de erro crítico
      }

      // Aguarda antes de tentar novamente
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  }
};
