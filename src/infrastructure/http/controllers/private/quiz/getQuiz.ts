import type { FastifyRequest, FastifyReply } from 'fastify';
import { HttpController } from '@/infrastructure/http/HttpController';
import { QuizService } from '@/application/quiz/services/QuizService';
import { QuizRepository } from '@/infrastructure/persistence/QuizRepository';

import { HttpError } from '@/core/errors/http/HttpError';
import { InternalServerError } from '@/core/errors/http/internal-server-error';
import { GetQuizDTO } from '@/application/quiz/dtos/GetQuizDTO';

export class GetQuizController extends HttpController {
  public async handler(
    request: FastifyRequest,
    reply: FastifyReply,
    dispatchHttpError: (error: HttpError) => void,
  ) {
    try {
      const queryParams = request.query as Record<string, string>;

      const quizRepository = new QuizRepository();

      const quizService = new QuizService(quizRepository);

      const response = await quizService.getQuiz(
        new GetQuizDTO({
          id: queryParams?.id ?? '',
        }),
      );

      if (!response.success) {
        if (response.statusCode === 500) {
          dispatchHttpError(new InternalServerError('Erro ao buscar quizzes'));

          return;
        }

        if (response.statusCode === 400) {
          dispatchHttpError(
            new HttpError({
              statusCode: 400,
              ...(typeof response.message === 'string'
                ? { message: response.message }
                : {}),
            }),
          );

          return;
        }

        if (response.statusCode === 404) {
          dispatchHttpError(
            new HttpError({
              statusCode: 404,
              ...(typeof response.message === 'string'
                ? { message: response.message }
                : {}),
            }),
          );

          return;
        }

        dispatchHttpError(new InternalServerError('Erro ao buscar quizzes'));

        return;
      }

      reply
        .status(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ success: true, data: response.data });
    } catch (error) {
      console.error('Erro ao buscar quizzes', error);
      dispatchHttpError(new InternalServerError('Erro ao buscar quizzes'));
    }
  }
}
