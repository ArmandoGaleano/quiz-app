import { HttpError } from './HttpError';

export class InternalServerError extends HttpError {
  constructor(message?: string) {
    super({
      message: message ?? 'Internal server error',
      statusCode: 500,
    });
    this.name = 'InternalServerError';
  }
}
