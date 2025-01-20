import { HttpError } from './HttpError';

import { InternalServerError } from './internal-server-error';
import { InvalidRequestBodyError } from './invalid-request-body-error';
import { ConflictError } from './conflict';

export const knownErrors: KnownErrorsType<HttpError> = [
  HttpError,
  InternalServerError,
  InvalidRequestBodyError,
  ConflictError,
];
