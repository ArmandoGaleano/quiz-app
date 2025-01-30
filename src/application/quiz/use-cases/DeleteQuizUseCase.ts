import type { BaseUseCase } from '@/core/abstraction/BaseUseCase';
import type { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import type { DeleteQuizDTO } from '../dtos/DeleteQuizDTO';
import { RepositoryResponse } from '@/core/responses/RepositoryResponse';
import { knownErrors } from '@/core/errors/services/QuizService';
import { DeleteQuizValidation } from '@/core/validation/zod/quiz/DeleteQuizValidation';

export class DeleteQuizUseCase implements BaseUseCase<DeleteQuizDTO> {
  constructor(private readonly quizRepository: QuizRepository) {}
  async execute(dto: DeleteQuizDTO) {
    try {
      const validatedDto = new DeleteQuizValidation(dto).validate();

      const { questionExists, questionExistsSuccess } =
        await this.checkIfQuestionExists(validatedDto);

      if (!questionExistsSuccess) {
        console.error('Erro ao verificar se a questão existe');
        return new RepositoryResponse({ statusCode: 500 });
      }

      if (!questionExists) {
        return new RepositoryResponse({
          message: 'Questão não encontrada!',
          statusCode: 400,
        });
      }

      const response = await this.quizRepository.delete(validatedDto);

      return response;
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

  private async checkIfQuestionExists(validatedDto: DeleteQuizDTO) {
    try {
      const findQuestionId = await this.quizRepository.search({
        props: {
          id: validatedDto.id,
        },
      });

      if (
        typeof findQuestionId?.data?.length === 'number' &&
        findQuestionId?.data?.length > 0
      ) {
        return {
          questionExistsSuccess: true,
          questionExists: true,
        };
      }

      return {
        questionExistsSuccess: true,
        questionExists: false,
      };
    } catch (error) {
      console.error('Erro ao verificar se a questão existe:');
      console.error(error);

      return {
        questionExistsSuccess: false,
        questionExists: false,
      };
    }
  }
}
