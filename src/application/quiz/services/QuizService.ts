import { CreateQuizUseCase } from '../use-cases/CreateQuizUseCase';
import { GetQuizUseCase } from '../use-cases/GetQuizUseCase';
import { UpdateQuizUseCase } from '../use-cases/UpdateQuizUseCase';

import type { QuizRepository } from '@/infrastructure/persistence/QuizRepository';
import type { CreateQuizDTO } from '@/application/quiz/dtos/CreateQuizDTO';
import type { GetQuizDTO } from '../dtos/GetQuizDTO';
import type { UpdateQuizDTO } from '../dtos/UpdateQuizDTO';

export class QuizService<TQuizRepository extends QuizRepository> {
  private readonly CreateQuizUseCase: CreateQuizUseCase;
  private readonly GetQuizUseCase: GetQuizUseCase;
  private readonly UpdateQuizUseCase: UpdateQuizUseCase;

  constructor(private quizRepository: TQuizRepository) {
    this.CreateQuizUseCase = new CreateQuizUseCase(quizRepository);
    this.GetQuizUseCase = new GetQuizUseCase(quizRepository);
    this.UpdateQuizUseCase = new UpdateQuizUseCase(quizRepository);
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
