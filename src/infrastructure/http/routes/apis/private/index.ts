import type { FastifyInstance } from 'fastify';
import { quizRoutes } from './quizRoutes';

export async function privateRoutes(app: FastifyInstance) {
  app.register(quizRoutes, {
    prefix: '/quiz',
  });
}
