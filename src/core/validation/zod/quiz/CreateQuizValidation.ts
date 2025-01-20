import z from 'zod';
import { BaseZodValidation } from '../../../abstraction/BaseZodValidation';
import { QuizSchemaError } from '../../../errors/services/QuizService/quiz-schema-error';
import { questionSchema } from './schema/question';
import { CreateQuizDTO } from '@/application/quiz/dtos/CreateQuizDTO';
import type { ICreateQuizDTOProps } from '@/application/quiz/dtos/CreateQuizDTO';

export class CreateQuizValidation extends BaseZodValidation<ICreateQuizDTOProps> {
  constructor(dto: CreateQuizDTO) {
    super({
      schema: questionSchema,
      data: {
        slug: dto.slug,
        title: dto.title,
        shortDescription: dto.shortDescription,
        questionStatement: dto.questionStatement,
        active: dto.active,
        type: dto.type,
        alternatives: dto.alternatives,
        keywords: dto.keywords,
      },
    });
  }
  public validate() {
    try {
      const validatedData = this.schema.parse(this.data) as ICreateQuizDTOProps;

      return new CreateQuizDTO(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new QuizSchemaError(error.message);
      }

      throw new QuizSchemaError('Unexpected error');
    }
  }
}
