export {};

declare global {
  export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
  export type KnownErrorsType<TError extends HttpError> = Array<
    new (...args: any[]) => TError
  >;
}
