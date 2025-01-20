export type IUpdateQuizDTOProps = Optional<
  Omit<QuizRepositoryProps, 'createdAt' | 'updatedAt'>,
  | 'slug'
  | 'title'
  | 'shortDescription'
  | 'questionStatement'
  | 'active'
  | 'type'
  | 'alternatives'
  | 'keywords'
>;

export class UpdateQuizDTO implements IUpdateQuizDTOProps {
  readonly id: QuizRepositoryProps['id'];
  readonly slug?: QuizRepositoryProps['slug'];
  readonly title?: QuizRepositoryProps['title'];
  readonly shortDescription?: QuizRepositoryProps['shortDescription'];
  readonly questionStatement?: QuizRepositoryProps['questionStatement'];
  readonly active?: QuizRepositoryProps['active'];
  readonly type?: QuizRepositoryProps['type'];
  readonly alternatives?: QuizRepositoryProps['alternatives'];
  readonly keywords?: QuizRepositoryProps['keywords'];

  constructor(props: IUpdateQuizDTOProps) {
    this.id = props.id;
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
