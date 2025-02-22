import * as z from 'zod';

export const keywordSchema = z.object({
  id: z.string().uuid().optional(),
  text: z.string().min(1),
});
