import { CreateQuizUseCase } from '@/application/quiz/use-cases/CreateQuizUseCase';
import { GetQuizUseCase } from '@/application/quiz/use-cases/GetQuizUseCase';
import { UpdateQuizUseCase } from '@/application/quiz/use-cases/UpdateQuizUseCase';
import { DeleteQuizUseCase } from '@/application/quiz/use-cases/DeleteQuizUseCase';

import type { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import type { CreateQuizDTO } from '@/application/quiz/dtos/CreateQuizDTO';
import type { GetQuizDTO } from '../dtos/GetQuizDTO';
import type { UpdateQuizDTO } from '../dtos/UpdateQuizDTO';
import type { DeleteQuizDTO } from '../dtos/DeleteQuizDTO';

export class QuizService<TQuizRepository extends QuizRepository> {
  private readonly CreateQuizUseCase: CreateQuizUseCase;
  private readonly GetQuizUseCase: GetQuizUseCase;
  private readonly UpdateQuizUseCase: UpdateQuizUseCase;
  private readonly DeleteQuizUseCase: DeleteQuizUseCase;

  constructor(private quizRepository: TQuizRepository) {
    this.CreateQuizUseCase = new CreateQuizUseCase(quizRepository);
    this.GetQuizUseCase = new GetQuizUseCase(quizRepository);
    this.UpdateQuizUseCase = new UpdateQuizUseCase(quizRepository);
    this.DeleteQuizUseCase = new DeleteQuizUseCase(quizRepository);
  }

  async createQuiz(dto: CreateQuizDTO) {
    return this.CreateQuizUseCase.execute(dto);
  }

  async getQuiz(dto: GetQuizDTO) {
    return this.GetQuizUseCase.execute(dto);
  }

  async updateQuiz(dto: UpdateQuizDTO) {
    return this.UpdateQuizUseCase.execute(dto);
  }

  async deleteQuiz(dto: DeleteQuizDTO) {
    return this.DeleteQuizUseCase.execute(dto);
  }

  async getAll() {
    const { data, success } = await this.quizRepository.getAll();

    if (success) {
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
