import { updateEnvVariable } from './utils/updateEnvVariable.js';
import dotenv from 'dotenv';

dotenv.config();

updateEnvVariable(
  'DATABASE_URL',
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.NODE_ENV === 'production' ? (process?.env?.SERVER_HOST ?? 'SERVER_HOST_NOT_DEFINED') : 'localhost'}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
);

updateEnvVariable(
  'SHADOW_DATABASE_URL',
  `mysql://root:${process.env.DB_ROOT_PASSWORD}@${process.env.NODE_ENV === 'production' ? (process?.env?.SERVER_HOST ?? 'SERVER_HOST_NOT_DEFINED') : 'localhost'}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
);
