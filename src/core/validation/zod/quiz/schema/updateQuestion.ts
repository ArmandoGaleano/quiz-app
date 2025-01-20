import * as z from 'zod';
import { keywordSchema } from './keyword';
import { QuestionType } from './question';

export const updateQuestionSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1),
  title: z.string().min(1),
  shortDescription: z.string().default('Sem descrição'),
  questionStatement: z.string().min(1),
  active: z.boolean().default(false),
  type: z.nativeEnum(QuestionType),
  alternatives: z
    .array(
      z.object({
        text: z.string().min(1),
        isCorrect: z.boolean().default(false),
      }),
    )
    .default([]),
  keywords: z.array(keywordSchema).default([]),
});
