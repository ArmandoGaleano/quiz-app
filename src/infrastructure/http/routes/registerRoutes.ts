import type { FastifyInstance } from 'fastify';
import { registerApiRoutes } from './apis/registerApiRoutes';

export async function registerRoutes(app: FastifyInstance) {
  app.register(registerApiRoutes, {
    prefix: '/_v/api',
  });
}
