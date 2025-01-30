import z from 'zod';
import { BaseZodValidation } from '../../../abstraction/BaseZodValidation';
import { QuizSchemaError } from '../../../errors/services/QuizService/quiz-schema-error';
import { deleteQuestionSchema } from './schema/deleteQuestion';

import { DeleteQuizDTO } from '@/application/quiz/dtos/DeleteQuizDTO';
import type { IDeleteQuizDTOProps } from '@/application/quiz/dtos/DeleteQuizDTO';

export class DeleteQuizValidation extends BaseZodValidation<IDeleteQuizDTOProps> {
  constructor(dto: DeleteQuizDTO) {
    super({
      schema: deleteQuestionSchema,
      data: {
        id: dto.id,
      },
    });
  }
  public validate() {
    try {
      const validatedData = this.schema.parse(this.data) as IDeleteQuizDTOProps;

      return new DeleteQuizDTO(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new QuizSchemaError(error.message);
      }

      throw new QuizSchemaError('Unexpected error');
    }
  }
}
