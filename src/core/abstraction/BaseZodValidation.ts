import type z from 'zod';

type BaseZodValidationProps<TResult = Record<string, any>> = {
  schema: z.ZodObject<any>;
  data: TResult;
};

export abstract class BaseZodValidation<TResult = Record<string, any>> {
  private _schema: z.ZodObject<any>;
  private _data: TResult;

  get schema() {
    return this._schema;
  }

  get data() {
    return this._data;
  }

  constructor(props: BaseZodValidationProps<TResult>) {
    this._schema = props.schema;
    this._data = props.data;
  }

  abstract validate(): any;
}
