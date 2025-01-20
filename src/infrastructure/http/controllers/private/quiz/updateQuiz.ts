import type { FastifyRequest, FastifyReply } from 'fastify';
import { HttpController } from '@/infrastructure/http/HttpController';
import { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import { QuizService } from '@/application/quiz/services/QuizService';

import { InternalServerError } from '@/core/errors/http/internal-server-error';
import { InvalidRequestBodyError } from '@/core/errors/http/invalid-request-body-error';
import { UpdateQuizDTO } from '@/application/quiz/dtos/UpdateQuizDTO';
import { ConflictError } from '@/core/errors/http/conflict';
import type { HttpError } from '@/core/errors/http/HttpError';

import type { IUpdateQuizDTOProps } from '@/application/quiz/dtos/UpdateQuizDTO';

export class UpdateQuizController extends HttpController {
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

    const { statusCode, success, message, data } = await quizService.updateQuiz(
      new UpdateQuizDTO(body as IUpdateQuizDTOProps),
    );

    if (success) {
      console.info({ data });
      reply
        .status(statusCode)
        .send({ message: 'Quiz atualizado com sucesso!', data });

      return;
    }

    if (statusCode === 400) {
      dispatchHttpError(new InvalidRequestBodyError(message));

      return;
    }

    if (statusCode === 409) {
      dispatchHttpError(new ConflictError(message));

      return;
    }

    console.error({ statusCode, success, message, data });
    dispatchHttpError(new InternalServerError('Erro ao atualizar o quiz!'));
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
