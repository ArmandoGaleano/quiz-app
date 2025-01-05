import type { QuizRepositoryProps } from '../../../core/@types/repositories/QuizRepository';

export type CreateQuizDTO = Omit<QuizRepositoryProps, 'id'>;
