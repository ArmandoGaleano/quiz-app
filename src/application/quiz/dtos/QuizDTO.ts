export type IQuizDTOProps = QuizRepositoryProps;

export class QuizDTO implements IQuizDTOProps {
  readonly id: QuizRepositoryProps['id'];
  readonly slug: QuizRepositoryProps['slug'];
  readonly title: QuizRepositoryProps['title'];
  readonly shortDescription: QuizRepositoryProps['shortDescription'];
  readonly questionStatement: QuizRepositoryProps['questionStatement'];
  readonly active: QuizRepositoryProps['active'];
  readonly type: QuizRepositoryProps['type'];
  readonly alternatives: QuizRepositoryProps['alternatives'];
  readonly keywords: QuizRepositoryProps['keywords'];
  readonly createdAt: QuizRepositoryProps['createdAt'];
  readonly updatedAt: QuizRepositoryProps['updatedAt'];

  constructor(props: IQuizDTOProps) {
    this.id = props.id;
    this.slug = props.slug;
    this.title = props.title;
    this.shortDescription = props.shortDescription;
    this.questionStatement = props.questionStatement;
    this.active = props.active;
    this.type = props.type;
    this.alternatives = props.alternatives;
    this.keywords = props.keywords;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
