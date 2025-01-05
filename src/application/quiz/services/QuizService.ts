import { RepositoryResponse } from '@/core/responses/RepositoryResponse';
import type { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import { QuizRepositoryValidation } from '@/core/validation/zod/quiz/QuizRepositoryValidation';
import knownErrors from '@/core/errors/services/question';

import type { CreateQuizDTO } from '../dtos/CreateQuizDTO';

export class QuizService<TQuizRepository extends QuizRepository> {
  constructor(private quizRepository: TQuizRepository) {}

  async createQuiz(props: CreateQuizDTO) {
    try {
      const validatedData = new QuizRepositoryValidation(props).validate();

      const response = await this.quizRepository.create(validatedData);

      if (response.success) {
        console.log('Quiz criado com sucesso!');
        return new RepositoryResponse({ statusCode: 201 });
      }

      console.log('Erro ao criar quiz:');
      return new RepositoryResponse({ statusCode: 400 });
    } catch (error: any) {
      const isKnownError = Object.values(knownErrors).some(
        (errorClass) => error instanceof errorClass,
      );

      if (isKnownError) {
        console.error('Houve um erro conhecido:');
        console.error(error);

        return new RepositoryResponse({
          statusCode: 400,
          message: error.message,
        });
      }

      console.error('Erro desconhecido:');
      console.error(error);
      return new RepositoryResponse({ statusCode: 500 });
    }
  }

  async getAll() {
    const { data, success } = await this.quizRepository.getAll();

    if (success) {
      console.log('Quizzes retornados com sucesso!');
      console.log({ data });
      return {
        success,
        data,
      };
    }

    console.error('Erro ao retornar quizzes!');
    return {
      success,
      data,
    };
  }
}
