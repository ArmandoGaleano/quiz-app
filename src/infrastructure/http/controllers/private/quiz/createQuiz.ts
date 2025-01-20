import type { FastifyRequest, FastifyReply } from 'fastify';
import { HttpController } from '@/infrastructure/http/HttpController';
import { QuizService } from '@/application/quiz/services/QuizService';
import { QuizRepository } from '@/infrastructure/persistence/QuizRepository';

import { HttpError } from '@/core/errors/http/HttpError';
import { InternalServerError } from '@/core/errors/http/internal-server-error';
import { InvalidRequestBodyError } from '@/core/errors/http/invalid-request-body-error';
import type { CreateQuizDTO } from '@/application/quiz/dtos/CreateQuizDTO';

export class CreateQuizController extends HttpController {
  public async handler(
    request: FastifyRequest,
    reply: FastifyReply,
    dispatchHttpError: (error: HttpError) => void,
  ) {
    const { body } = request;

    if (typeof body !== 'object') {
      dispatchHttpError(new InvalidRequestBodyError());

      return;
    }

    const quizRepository = new QuizRepository();

    const quizService = new QuizService(quizRepository);

    const { statusCode, success, message, data } = await quizService.createQuiz(
      body as CreateQuizDTO,
    );

    if (success) {
      console.info({ data });
      reply
        .status(statusCode)
        .send({ message: 'Quiz criado com sucesso!', data });

      return;
    }

    if (statusCode === 400) {
      dispatchHttpError(
        new HttpError({
          statusCode: 400,
          ...(typeof message === 'string' ? { message } : {}),
        }),
      );

      return;
    }

    dispatchHttpError(new InternalServerError('Erro ao criar quiz!'));
  }
  public async getTeste(_request: FastifyRequest, reply: FastifyReply) {
    try {
      const quizRepository = new QuizRepository();

      const quizService = new QuizService(quizRepository);

      const data: any = await quizService.getAll();

      reply
        .status(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ data });
    } catch (error) {
      console.error('Erro ao buscar quizzes', error);
    }
  }
}
