interface IQuestionProps {
  get id(): string;
  get slug(): string;
  get title(): string;
  get shortDescription(): string;
  get questionStatement(): string;
  get active(): boolean;
  get type(): string;
  get createdAt(): Date;
  get updatedAt(): Date;
}
