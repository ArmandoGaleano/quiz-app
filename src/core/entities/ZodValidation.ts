import type z from 'zod';

type ZodValidationProps<TResult> = {
  schema: z.ZodObject<any>;
  data: TResult;
};

export abstract class ZodValidation<TResult> {
  private _schema: z.ZodObject<any>;
  private _data: TResult;

  get schema() {
    return this._schema;
  }

  get data() {
    return this._data;
  }

  constructor(props: ZodValidationProps<TResult>) {
    this._schema = props.schema;
    this._data = props.data;
  }

  abstract validate(): TResult | void;
}
