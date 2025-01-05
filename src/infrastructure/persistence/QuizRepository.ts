import { RepositoryEntity } from '../../core/entities/RepositoryEntity';
import { PrismaClientProvider } from './PrismaClientProvider';
import { RepositoryResponse } from '../../core/responses/RepositoryResponse';
import type { CreateQuizDTO } from '../../application/quiz/dtos/CreateQuizDTO';

export class QuizRepository extends RepositoryEntity {
  constructor() {
    super({
      prismaClient: PrismaClientProvider.getInstance(process.env.DATABASE_URL),
    });
  }
  public async getAll(): Promise<RepositoryResponse<any[]>> {
    try {
      const data = await this.prisma.question.findMany({
        include: {
          alternatives: true,
          keywords: true,
        },
      });

      return new RepositoryResponse({ statusCode: 200, data });
    } catch (error) {
      console.error('Quiz Repository Error [getAll]:');
      console.error(error);

      return new RepositoryResponse({ statusCode: 500 });
    }
  }
  public async create(props: CreateQuizDTO) {
    try {
      await this.prisma.question.create({
        data: {
          slug: props.slug,
          title: props.title,
          shortDescription: props.shortDescription,
          questionStatement: props.questionStatement,
          active: props.active,
          type: props.type,
          alternatives: {
            createMany: {
              data: props.alternatives,
            },
          },
          keywords: {
            connectOrCreate: props.keywords.map((keyword) => ({
              where: { text: keyword.text },
              create: { text: keyword.text },
            })),
          },
        },
      });

      return new RepositoryResponse({ statusCode: 201 });
    } catch (error) {
      console.error('Quiz Repository');
      console.error('Create Quiz Error:');
      console.error(error);

      return new RepositoryResponse({ statusCode: 400 });
    }
  }
}
