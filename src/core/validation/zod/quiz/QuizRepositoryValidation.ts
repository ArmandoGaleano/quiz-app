import type { QuizRepositoryProps } from '../../../@types/repositories/QuizRepository';
import { ZodValidation } from '../../../entities/ZodValidation';
import { QuizSchemaError } from '../../../errors/services/question/quiz-schema-error';
import { questionSchema } from './schema/question';
import z from 'zod';

export class QuizRepositoryValidation extends ZodValidation<QuizRepositoryProps> {
  constructor(data: QuizRepositoryProps) {
    super({
      schema: questionSchema,
      data,
    });
  }
  public validate() {
    try {
      const validatedData = this.schema.parse(this.data) as QuizRepositoryProps;

      return validatedData;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new QuizSchemaError(error.message);
      }

      return undefined as unknown as QuizRepositoryProps;
    }
  }
}
