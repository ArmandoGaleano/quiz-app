import { HttpError } from './HttpError';

export class ConflictError extends HttpError {
  constructor(message?: string) {
    super({
      message: message ?? 'Conflict',
      statusCode: 409,
    });
    this.name = 'Conflict';
  }
}
