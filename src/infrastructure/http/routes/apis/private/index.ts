import type { FastifyInstance } from 'fastify';
import { HttpResponseHandler } from '@/infrastructure/http/HttpResponseHandlers';

import { CreateQuizController } from '@/infrastructure/http/controllers/private/quiz/createQuiz';
import { GetQuizController } from '@/infrastructure/http/controllers/private/quiz/getQuiz';
import { UpdateQuizController } from '@/infrastructure/http/controllers/private/quiz/updateQuiz';

import { knownErrors } from '@/core/errors/http/knownErrors';

export async function privateRoutes(app: FastifyInstance) {
  app.post(
    '/quiz',
    HttpResponseHandler(new CreateQuizController().handler, knownErrors),
  );
  app.get(
    '/quiz',
    HttpResponseHandler(new GetQuizController().handler, knownErrors),
  );
  app.get(
    '/quiz/getAll',
    HttpResponseHandler(new CreateQuizController().getTeste, knownErrors),
  );
  app.patch(
    '/quiz',
    HttpResponseHandler(new UpdateQuizController().handler, knownErrors),
  );
}
