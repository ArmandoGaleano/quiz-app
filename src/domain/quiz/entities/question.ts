import { BaseEntityModel } from '@/core/abstraction/BaseEntityModel';

export class Question
  extends BaseEntityModel<QuestionModelProps>
  implements IQuestionProps
{
  get id(): string {
    return this.props.id;
  }
  get slug(): string {
    return this.props.slug;
  }
  get title(): string {
    return this.props.title;
  }
  get shortDescription(): string {
    return this.props.shortDescription;
  }
  get questionStatement(): string {
    return this.props.questionStatement;
  }
  get active(): boolean {
    return this.props.active;
  }
  get type(): string {
    return this.props.type;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  constructor(props: QuestionModelProps) {
    super(props);
  }
}
