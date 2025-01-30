import * as z from 'zod';

export const deleteQuestionSchema = z.object({
  id: z.string().uuid(),
});
