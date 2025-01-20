export type IGetQuizDTOProps = {
  id: QuizRepositoryProps['id'];
};

export class GetQuizDTO implements IGetQuizDTOProps {
  readonly id: QuizRepositoryProps['id'];

  constructor(props: IGetQuizDTOProps) {
    this.id = props.id;
  }
}
