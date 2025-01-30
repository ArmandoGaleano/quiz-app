import type { FastifyRequest, FastifyReply } from 'fastify';
import { HttpController } from '@/infrastructure/http/HttpController';
import { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import { QuizService } from '@/application/quiz/services/QuizService';

import { InternalServerError } from '@/core/errors/http/internal-server-error';
import { InvalidRequestBodyError } from '@/core/errors/http/invalid-request-body-error';
import { DeleteQuizDTO } from '@/application/quiz/dtos/DeleteQuizDTO';
import type { HttpError } from '@/core/errors/http/HttpError';

import type { IDeleteQuizDTOProps } from '@/application/quiz/dtos/DeleteQuizDTO';

export class DeleteQuizController extends HttpController {
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

    const { statusCode, success, message } = await quizService.deleteQuiz(
      new DeleteQuizDTO(body as IDeleteQuizDTOProps),
    );

    if (success) {
      reply.status(statusCode).send({ message: 'Quiz deletado com sucesso!' });

      return;
    }

    if (statusCode === 400) {
      dispatchHttpError(new InvalidRequestBodyError(message));

      return;
    }

    console.error({ statusCode, success, message });
    dispatchHttpError(new InternalServerError('Erro ao deletar o quiz!'));
  }
}
