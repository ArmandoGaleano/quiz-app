import type { FastifyInstance } from 'fastify';
import { privateRoutes } from './private/index';
// import { publicRoutes } from './public/index';

export async function registerApiRoutes(app: FastifyInstance) {
  app.register(privateRoutes, {
    prefix: '/private',
  });

  // app.register(privateRoutes, {
  //   prefix: '/public',
  // });
}
