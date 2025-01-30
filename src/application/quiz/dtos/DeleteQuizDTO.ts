export type IDeleteQuizDTOProps = Pick<QuizRepositoryProps, 'id'>;

export class DeleteQuizDTO implements IDeleteQuizDTOProps {
  readonly id: QuizRepositoryProps['id'];

  constructor(props: IDeleteQuizDTOProps) {
    this.id = props.id;
  }
}
