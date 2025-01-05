import { HttpError } from './HttpError';

export class InvalidRequestBodyError extends HttpError {
  constructor(message?: string) {
    super({
      message: message ?? 'Request body is not in the correct format',
      statusCode: 400,
    });
    this.name = 'InvalidRequestBodyError';
  }
}
