import { RepositoryResponse } from '@/core/responses/RepositoryResponse';
import { knownErrors } from '@/core/errors/http/knownErrors';
import type { BaseUseCase } from '@/core/abstraction/BaseUseCase';
import type { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import type { GetQuizDTO } from '../dtos/GetQuizDTO';

export class GetQuizUseCase implements BaseUseCase<GetQuizDTO> {
  constructor(private readonly quizRepository: QuizRepository) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async execute(
    dto: GetQuizDTO,
  ): Promise<
    RepositoryResponse<QuizRepositoryProps> | RepositoryResponse<undefined>
  > {
    try {
      if (!dto?.id?.trim()?.length) {
        return new RepositoryResponse({
          message: 'ID do quiz não informado!',
          statusCode: 400,
        });
      }

      const response = await this.quizRepository.findUniqueById(dto.id);

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
}
