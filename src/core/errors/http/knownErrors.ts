import type { HttpError } from './HttpError';

import { InvalidRequestBodyError } from './invalid-request-body-error';

export const knownErrors: KnownErrorsType<HttpError> = [
  InvalidRequestBodyError,
];
