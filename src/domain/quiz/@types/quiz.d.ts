interface IQuizProps<
  TQuestion extends Question,
  TAlternative extends Alternative,
  TKeyword extends Keyword,
> {
  get id(): TQuestion['id'];
  get slug(): TQuestion['slug'];
  get title(): TQuestion['title'];
  get shortDescription(): TQuestion['shortDescription'];
  get questionStatement(): TQuestion['questionStatement'];
  get active(): TQuestion['active'];
  get type(): TQuestion['type'];
  get createdAt(): TQuestion['createdAt'];
  get updatedAt(): Date;
  get alternatives(): TAlternative[];
  get keywords(): TKeyword[];
}

type QuizProps<
  TQuestion extends Question,
  TAlternative extends Alternative,
  TKeyword extends Keyword,
> = {
  question: TQuestion;
  alternatives: TAlternative[];
  keywords: TKeyword[];
};
