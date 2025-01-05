import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../../.env');

// Função para atualizar ou adicionar uma variável no .env
export function updateEnvVariable(key, value) {
  const envContent = fs.existsSync(envPath)
    ? fs.readFileSync(envPath, 'utf-8')
    : '';
  const regex = new RegExp(`^${key}=.*`, 'm');
  let newEnvContent;

  if (regex.test(envContent)) {
    // Atualiza a variável existente
    newEnvContent = envContent.replace(regex, `${key}=${value}`);
  } else {
    // Adiciona a variável se não existir
    newEnvContent = `${envContent.trim()}\n${key}=${value}\n`;
  }

  fs.writeFileSync(envPath, newEnvContent);
}
