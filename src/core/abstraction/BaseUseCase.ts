export abstract class BaseUseCase<TProps> {
  abstract execute(props: TProps): Promise<any>;
}
