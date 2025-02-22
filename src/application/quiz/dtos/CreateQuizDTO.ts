export type ICreateQuizDTOProps = Omit<
  QuizRepositoryProps,
  'id' | 'createdAt' | 'updatedAt'
>;

export class CreateQuizDTO implements ICreateQuizDTOProps {
  readonly slug: QuizRepositoryProps['slug'];
  readonly title: QuizRepositoryProps['title'];
  readonly shortDescription: QuizRepositoryProps['shortDescription'];
  readonly questionStatement: QuizRepositoryProps['questionStatement'];
  readonly active: QuizRepositoryProps['active'];
  readonly type: QuizRepositoryProps['type'];
  readonly alternatives: QuizRepositoryProps['alternatives'];
  readonly keywords: QuizRepositoryProps['keywords'];

  constructor(props: ICreateQuizDTOProps) {
    this.slug = props.slug;
    this.title = props.title;
    this.shortDescription = props.shortDescription;
    this.questionStatement = props.questionStatement;
    this.active = props.active;
    this.type = props.type;
    this.alternatives = props.alternatives;
    this.keywords = props.keywords;
  }
}
