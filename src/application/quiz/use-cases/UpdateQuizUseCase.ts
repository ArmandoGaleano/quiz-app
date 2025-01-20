import type { BaseUseCase } from '@/core/abstraction/BaseUseCase';
import type { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import type { UpdateQuizDTO } from '../dtos/UpdateQuizDTO';
import { RepositoryResponse } from '@/core/responses/RepositoryResponse';
import { knownErrors } from '@/core/errors/services/QuizService';
import { UpdateQuizValidation } from '@/core/validation/zod/quiz/UpdateQuizValidation';

export class UpdateQuizUseCase implements BaseUseCase<UpdateQuizDTO> {
  constructor(private readonly quizRepository: QuizRepository) {}
  async execute(dto: UpdateQuizDTO) {
    try {
      const validatedDto = new UpdateQuizValidation(dto).validate();

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

      const { hasConflic, hasConflicSuccess } =
        await this.checkIfQuestionConflicts(validatedDto);

      if (!hasConflicSuccess) {
        console.error('Erro ao verificar se a questão existe');
        return new RepositoryResponse({ statusCode: 500 });
      }

      if (hasConflic) {
        return new RepositoryResponse({
          message: 'Questão já existente!',
          statusCode: 409, // Conflict
        });
      }

      const response = await this.quizRepository.update(validatedDto);

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

  private async checkIfQuestionExists(validatedDto: UpdateQuizDTO) {
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

  private async checkIfQuestionConflicts(validatedDto: UpdateQuizDTO) {
    try {
      const findQuestionSlug = await this.quizRepository.search({
        props: {
          slug: validatedDto.slug,
        },
        notProps: {
          id: validatedDto.id,
        },
      });

      const findQuestionTitle = await this.quizRepository.search({
        props: {
          title: validatedDto.title,
        },
        notProps: {
          id: validatedDto.id,
        },
      });

      if (
        (typeof findQuestionSlug?.data?.length === 'number' &&
          findQuestionSlug?.data?.length > 0) ||
        (typeof findQuestionTitle?.data?.length === 'number' &&
          findQuestionTitle?.data?.length > 0)
      ) {
        return {
          hasConflicSuccess: true,
          hasConflic: true,
        };
      }

      return {
        hasConflicSuccess: true,
        hasConflic: false,
      };
    } catch (error) {
      console.error('Erro ao verificar se a questão existe:');
      console.error(error);

      return {
        hasConflicSuccess: false,
        hasConflic: false,
      };
    }
  }
}
