interface IAlternativeProps {
  get id(): string;
  get questionId(): string;
  get text(): string;
  get isCorrect(): boolean;
  get createdAt(): Date;
  get updatedAt(): Date;
}
