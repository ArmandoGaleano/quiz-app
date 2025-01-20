import type { FastifyReply, FastifyRequest } from 'fastify';
import type { HttpError } from '../../core/errors/http/HttpError';
import type { HttpResponseControllerProps } from '../../core/@types/http/httpResponseHandler';

interface IHttpController {
  handler: HttpResponseControllerProps<HttpError>;
}

export abstract class HttpController implements IHttpController {
  abstract handler(
    request: FastifyRequest,
    reply: FastifyReply,
    dispatchHttpError: (error: HttpError) => void,
  ): Promise<void>;
}
