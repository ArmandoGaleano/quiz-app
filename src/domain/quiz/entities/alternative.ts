import { QuizEntity } from '../../../core/entities/QuizEntity';

export class Alternative
  extends QuizEntity<AlternativeModelProps>
  implements IAlternativeProps
{
  get id(): string {
    return this.props.id;
  }
  get questionId(): string {
    return this.props.questionId;
  }
  get text(): string {
    return this.props.text;
  }
  get isCorrect(): boolean {
    return this.props.isCorrect;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  constructor(props: AlternativeModelProps) {
    super(props);
  }
}
