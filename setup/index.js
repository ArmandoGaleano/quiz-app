import { developmentTasks } from './development.js';
import { productionTasks } from './production.js';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

process.env.DATABASE_URL = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

process.env.SHADOW_DATABASE_URL = `mysql://root:${process.env.DB_ROOT_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

if (process.env.NODE_ENV === 'production') {
  productionTasks.run().catch((err) => {
    console.error(err);
  });
}

if (process.env.NODE_ENV === 'development') {
  developmentTasks.run().catch((err) => {
    console.error(err);
  });
}

process.on('SIGINT', () => {
  console.log('\n❌ Setup interrupted!');
  process.exit(1);
});
