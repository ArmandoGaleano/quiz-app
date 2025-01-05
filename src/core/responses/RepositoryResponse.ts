type RepositoryResponseProps<TResultData = undefined> = {
  statusCode: number;
  message?: string;
  data?: TResultData;
};

export class RepositoryResponse<TResultData = undefined> {
  private _statusCode: number;
  private _message?: string;
  private _success: boolean;
  private _data?: TResultData;

  get statusCode() {
    return this._statusCode;
  }

  get message() {
    return this._message;
  }

  get success() {
    return this._success;
  }

  get data() {
    return this._data;
  }

  constructor(_props: RepositoryResponseProps<TResultData>) {
    this._statusCode = _props.statusCode;
    this._message = _props.message;
    this._success = RepositoryResponse.checkSuccessStatus(_props.statusCode);
    this._data = _props.data ? _props.data : undefined;
  }

  static checkSuccessStatus(statusCode: number): boolean {
    return statusCode >= 200 && statusCode < 300;
  }
}
