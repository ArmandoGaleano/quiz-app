import type { Optional } from '@prisma/client/runtime/library';

export type QuizRepositoryProps = Optional<
  Omit<QuestionModelProps, 'createdAt' | 'updatedAt'>,
  'id'
> & {
  alternatives: AlternativeRepositoryProps[];
  keywords: KeywordRepositoryProps[];
};

export type QuestionRepositoryProps = Optional<
  Omit<QuestionModelProps, 'createdAt' | 'updatedAt'>,
  'id'
>;

export type AlternativeRepositoryProps = Optional<
  Omit<AlternativeModelProps, 'createdAt' | 'updatedAt'>,
  'id'
>;

export type KeywordRepositoryProps = Optional<
  Omit<KeywordModelProps, 'createdAt' | 'updatedAt'>,
  'id'
>;
