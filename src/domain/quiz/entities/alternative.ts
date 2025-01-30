import { BaseEntityModel } from '@/core/abstraction/BaseEntityModel';

export class Alternative
  extends BaseEntityModel<AlternativeModelProps>
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
