import type {
  HttpResponseControllerProps,
  HttpResponseHandleRequestPromiseProps,
  HttpResponseProps,
} from '../../core/@types/http/httpResponseHandler';
import type { HttpError } from '../../core/errors/http/HttpError';
import type { FastifyReply, FastifyRequest } from 'fastify';

export class HttpResponse<THttpError extends HttpError> {
  private request: FastifyRequest;
  private reply: FastifyReply;
  private controller: HttpResponseControllerProps<THttpError>;
  private errors: THttpError[] = [];
  private knownErrors: KnownErrorsType<THttpError> = [];

  constructor(props: HttpResponseProps<THttpError>) {
    this.request = props.request;
    this.reply = props.reply;
    this.knownErrors = props.knownErrors ?? [];
    this.controller = props.controller;
  }
  public async execute() {
    return new Promise(this.handleRequestError.bind(this));
  }

  private async handleRequestError(
    resolve: (value?: undefined) => void,
    reject: (value: HttpResponseHandleRequestPromiseProps) => void,
  ) {
    const dispatchHttpError = (error: THttpError) => {
      this.errors.push(error);
      reject(error);
    };

    try {
      await this.controller(this.request, this.reply, dispatchHttpError);

      resolve();
    } catch (error: any) {
      const isKnownError = this.knownErrors.some(
        (errorClass) => error instanceof errorClass,
      );

      if (isKnownError) {
        reject({ message: error.message, statusCode: error.statusCode });
      }

      reject({ message: 'Internal server error!', statusCode: 500 });
    }
  }
}

export function HttpResponseHandler(
  controller: HttpResponseControllerProps<HttpError>,
  knownErrors: KnownErrorsType<HttpError>,
) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await new HttpResponse({
        request,
        reply,
        knownErrors,
        controller,
      }).execute();
    } catch (error: any) {
      console.log('Ponta do HTTP');
      console.error('Erro desconhecido:');
      console.error(error);
      if (typeof error?.statusCode === 'number') {
        reply.status(error.statusCode).send({ message: error.message ?? '' });

        return;
      }

      reply.status(500).send({ message: 'Internal server error!' });
    }
  };
}
