import z from 'zod';
import { BaseZodValidation } from '../../../abstraction/BaseZodValidation';
import { QuizSchemaError } from '../../../errors/services/QuizService/quiz-schema-error';
import { updateQuestionSchema } from './schema/updateQuestion';

import { UpdateQuizDTO } from '@/application/quiz/dtos/UpdateQuizDTO';
import type { IUpdateQuizDTOProps } from '@/application/quiz/dtos/UpdateQuizDTO';

export class UpdateQuizValidation extends BaseZodValidation<IUpdateQuizDTOProps> {
  constructor(dto: UpdateQuizDTO) {
    super({
      schema: updateQuestionSchema,
      data: {
        id: dto.id,
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
      const validatedData = this.schema.parse(this.data) as IUpdateQuizDTOProps;

      return new UpdateQuizDTO(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new QuizSchemaError(error.message);
      }

      throw new QuizSchemaError('Unexpected error');
    }
  }
}
