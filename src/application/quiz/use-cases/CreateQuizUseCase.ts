import type { BaseUseCase } from '@/core/abstraction/BaseUseCase';
import type { CreateQuizDTO } from '../dtos/CreateQuizDTO';
import type { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import { RepositoryResponse } from '@/core/responses/RepositoryResponse';
import { CreateQuizValidation } from '@/core/validation/zod/quiz/CreateQuizValidation';
import { knownErrors } from '@/core/errors/http/knownErrors';

export class CreateQuizUseCase implements BaseUseCase<CreateQuizDTO> {
  constructor(private readonly quizRepository: QuizRepository) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async execute(
    dto: CreateQuizDTO,
  ): Promise<
    RepositoryResponse<QuizRepositoryProps> | RepositoryResponse<undefined>
  > {
    try {
      const validatedDto = new CreateQuizValidation(dto).validate();

      const { questionExists, questionExistsSuccess } =
        await this.checkIfQuestionExists(validatedDto);

      if (!questionExistsSuccess) {
        console.error('Erro ao verificar se a questão existe');
        return new RepositoryResponse({ statusCode: 500 });
      }

      if (questionExists) {
        return new RepositoryResponse({
          message: 'Questão já existente!',
          statusCode: 400,
        });
      }

      const response = await this.quizRepository.create(validatedDto);

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

  private async checkIfQuestionExists(validatedDto: CreateQuizDTO) {
    try {
      const findQuestionSlug = await this.quizRepository.search({
        props: {
          slug: validatedDto.slug,
        },
      });

      const findQuestionTitle = await this.quizRepository.search({
        props: {
          title: validatedDto.title,
        },
      });

      if (
        (typeof findQuestionSlug?.data?.length === 'number' &&
          findQuestionSlug?.data?.length > 0) ||
        (typeof findQuestionTitle?.data?.length === 'number' &&
          findQuestionTitle?.data?.length > 0)
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
