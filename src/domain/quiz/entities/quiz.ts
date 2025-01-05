import type { Alternative } from './alternative';
import type { Keyword } from './keyword';
import type { Question } from './question';

export class Quiz<
  TQuestion extends Question,
  TAlternative extends Alternative,
  TKeyword extends Keyword,
> implements IQuizProps<TQuestion, TAlternative, TKeyword>
{
  get id(): string {
    return this.props.question.id;
  }
  get slug(): string {
    return this.props.question.slug;
  }
  get title(): string {
    return this.props.question.title;
  }
  get shortDescription(): string {
    return this.props.question.shortDescription;
  }
  get questionStatement(): string {
    return this.props.question.questionStatement;
  }
  get active(): boolean {
    return this.props.question.active;
  }
  get type(): string {
    return this.props.question.type;
  }
  get createdAt(): Date {
    return this.props.question.createdAt;
  }
  get updatedAt(): Date {
    return this.props.question.updatedAt;
  }
  get alternatives(): TAlternative[] {
    return this.props.alternatives;
  }
  get keywords(): TKeyword[] {
    return this.props.keywords;
  }

  constructor(private props: QuizProps<TQuestion, TAlternative, TKeyword>) {}
}
