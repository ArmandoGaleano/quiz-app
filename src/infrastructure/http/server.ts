import fastify from 'fastify';
import { registerRoutes } from './routes/registerRoutes';

const app = fastify();

app.register(registerRoutes);

app
  .listen({
    port: 3000,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server started on port 3000');
  });
