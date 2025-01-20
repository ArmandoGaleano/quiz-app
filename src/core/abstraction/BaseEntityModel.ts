export type BaseQuizProps = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class BaseEntityModel<TProps extends BaseQuizProps> {
  private _id: string;
  private _createdAt: Date;
  private _updatedAt?: Date;

  public get id() {
    return this._id;
  }

  public get createdAt() {
    return this._createdAt;
  }

  public get updatedAt() {
    return this._updatedAt;
  }

  public get props() {
    return this._props;
  }

  protected constructor(private _props: TProps) {
    this._id = this.props.id;
    this._createdAt = this.props.createdAt ?? new Date();
    this._updatedAt = this.props.updatedAt;
  }
}
