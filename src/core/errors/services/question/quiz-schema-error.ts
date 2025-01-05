export class QuizSchemaError extends Error {
  constructor(message?: string) {
    super(message ?? 'Quiz schema is invalid');
    this.name = 'QuizSchemaError';
  }
}
