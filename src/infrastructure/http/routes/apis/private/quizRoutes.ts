import type { FastifyInstance } from 'fastify';
import { CreateNewQuizController } from '../../../controllers/private/quiz/createNewQuiz';
import { HttpResponseHandler } from '../../../HttpResponseHandlers';
import { knownErrors } from '../../../../../core/errors/http/knownErrors';

// "/_v/api/private/quiz/.../..."
export async function quizRoutes(app: FastifyInstance) {
  app.post(
    '/create',
    HttpResponseHandler(new CreateNewQuizController().handle, knownErrors),
  );
  app.get(
    '/getAll',
    HttpResponseHandler(new CreateNewQuizController().getTeste, knownErrors),
  );
}
