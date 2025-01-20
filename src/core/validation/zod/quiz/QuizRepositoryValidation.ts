import { BaseZodValidation } from '../../../abstraction/BaseZodValidation';
import { QuizSchemaError } from '../../../errors/services/QuizService/quiz-schema-error';
import { questionSchema } from './schema/question';
import z from 'zod';

export class QuizRepositoryValidation extends BaseZodValidation<QuizRepositoryProps> {
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

      return undefined;
    }
  }
}
