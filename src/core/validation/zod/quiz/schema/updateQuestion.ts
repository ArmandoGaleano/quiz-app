import * as z from 'zod';
import { keywordSchema } from './keyword';
import { QuestionType } from './question';

export const updateQuestionSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).optional(),
  title: z.string().min(1).optional(),
  shortDescription: z.string().default('Sem descrição').optional(),
  questionStatement: z.string().min(1).optional(),
  active: z.boolean().optional(),
  type: z.nativeEnum(QuestionType).optional(),
  alternatives: z
    .array(
      z.object({
        text: z.string().min(1),
        isCorrect: z.boolean().default(false),
      }),
    )
    .optional(),
  keywords: z.array(keywordSchema).optional(),
});
