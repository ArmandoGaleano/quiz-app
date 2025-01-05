type HttpErrorProps = {
  message?: string;
  statusCode: number;
};

export class HttpError extends Error {
  public statusCode: number;

  constructor({ message, statusCode }: HttpErrorProps) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
  }
}
