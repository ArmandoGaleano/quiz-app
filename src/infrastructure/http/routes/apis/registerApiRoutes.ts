import type { FastifyInstance } from 'fastify';
import { privateRoutes } from './private/index';
// import { publicRoutes } from './public/index';

export async function registerApiRoutes(app: FastifyInstance) {
  app
    .register(privateRoutes, {
      prefix: '/private',
    })
    .addHook('preHandler', async (request, reply) => {
      // Middleware Authentication
      const authHeader = request?.headers?.authorization;

      if (!authHeader || !authHeader?.startsWith('Bearer ')) {
        reply.code(401).send('');
        return;
      }

      const token = authHeader.replace('Bearer ', '');

      if (token !== process.env.AUTH_BEARER_TOKEN) {
        reply.code(403).send('');
        return;
      }
    });

  // app.register(privateRoutes, {
  //   prefix: '/public',
  // });
}
