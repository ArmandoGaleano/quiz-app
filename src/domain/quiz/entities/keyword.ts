import { BaseEntityModel } from '@/core/abstraction/BaseEntityModel';

export class Keyword
  extends BaseEntityModel<KeywordModelProps>
  implements IKeywordProps
{
  get id(): string {
    return this.props.id;
  }
  get text(): string {
    return this.props.text;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  constructor(props: KeywordModelProps) {
    super(props);
  }
}
