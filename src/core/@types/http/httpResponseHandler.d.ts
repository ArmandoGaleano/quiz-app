export type HttpResponseControllerProps<THttpError> = (
  request: FastifyRequest,
  reply: FastifyReply,
  dispatchHttpError: (error: THttpError) => void,
) => Promise<void>;

export type HttpResponseProps<THttpError> = {
  request: FastifyRequest;
  reply: FastifyReply;
  knownErrors?: KnownErrorsType<THttpError>;
  controller: HttpResponseControllerProps<THttpError>;
};

export type HttpResponseHandleRequestPromiseProps = {
  message?: string;
  statusCode: number;
};
