import { BaseRepository } from '@/core/abstraction/BaseRepository';
import { PrismaClientProvider } from '@/infrastructure/persistence/PrismaClientProvider';
import { RepositoryResponse } from '@/core/responses/RepositoryResponse';
import type { IQuizDTOProps } from '@/application/quiz/dtos/QuizDTO';
import type { CreateQuizDTO } from '@/application/quiz/dtos/CreateQuizDTO';
import type {
  UpdateQuizDTO,
  IUpdateQuizDTOProps,
} from '@/application/quiz/dtos/UpdateQuizDTO';

type GetWhereTypeProps = Optional<
  Omit<IQuizDTOProps, 'alternatives' | 'keywords'>,
  | 'id'
  | 'slug'
  | 'title'
  | 'shortDescription'
  | 'questionStatement'
  | 'active'
  | 'type'
  | 'createdAt'
  | 'updatedAt'
> & {
  alternatives?: {
    every: AlternativeModelProps & {
      AND: AlternativeModelProps[];
    };
  };
} & {
  keywords?: {
    every: KeywordModelProps & {
      AND: KeywordModelProps[];
    };
  };
};
type UpdateQuizTypeProps = Optional<
  Omit<
    IUpdateQuizDTOProps,
    'id' | 'alternatives' | 'keywords' | 'createdAt' | 'updatedAt'
  >,
  | 'slug'
  | 'title'
  | 'shortDescription'
  | 'questionStatement'
  | 'active'
  | 'type'
> & {
  alternatives?: {
    update: Array<{
      data: Omit<
        AlternativeModelProps,
        'id' | 'questionId' | 'createdAt' | 'updatedAt'
      >;
      where: {
        id: AlternativeModelProps['id'];
      };
    }>;
  };
} & {
  keywords?: {
    connectOrCreate: Array<{
      where: { text: KeywordModelProps['text'] };
      create: { text: KeywordModelProps['text'] };
    }>;
  };
};

export class QuizRepository extends BaseRepository {
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
      const data = await this.prisma.question.create({
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
        include: {
          alternatives: true,
          keywords: true,
        },
      });

      return new RepositoryResponse<QuizRepositoryProps>({
        statusCode: 201,
        data,
      });
    } catch (error) {
      console.error('Quiz Repository');
      console.error('Create Quiz Error:');
      console.error(error);

      return new RepositoryResponse({ statusCode: 500 });
    }
  }

  public async update(dto: UpdateQuizDTO) {
    try {
      console.log({ dto });

      const propsToUpdate = Object.entries(dto).reduce<UpdateQuizTypeProps>(
        (acc, [key, value]) => {
          if (value === undefined || key === 'id') {
            return acc;
          }

          if (key === 'alternatives') {
            const alternatives = value as AlternativeModelProps[];

            if (alternatives.length) {
              acc[key] = {
                update: alternatives.map((alternative) => ({
                  data: {
                    text: alternative.text,
                    isCorrect: alternative.isCorrect,
                  },
                  where: {
                    id: alternative.id,
                  },
                })),
              };
            }

            return acc;
          }

          if (key === 'keywords') {
            const keywords = value as KeywordModelProps[];
            if (keywords.length) {
              acc[key] = {
                connectOrCreate: keywords.map((keyword) => ({
                  where: { text: keyword.text },
                  create: { text: keyword.text },
                })),
              };
            }

            return acc;
          }

          (acc as any)[key] = value;

          return acc;
        },
        {},
      );

      const data = await this.prisma.question.update({
        where: {
          id: dto.id,
        },
        data: propsToUpdate,
        include: {
          alternatives: true,
          keywords: true,
        },
      });

      console.log({ data });

      return new RepositoryResponse<QuizRepositoryProps>({
        statusCode: 200,
        data,
      });
    } catch (error) {
      console.error('Quiz Repository Error [update]:');
      console.error(error);

      return new RepositoryResponse({ statusCode: 500 });
    }
  }

  public async searchByQuery(
    query: string,
  ): Promise<RepositoryResponse<any[]>> {
    try {
      const data = await this.prisma.question.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query,
              },
            },
            {
              shortDescription: {
                contains: query,
              },
            },
            {
              questionStatement: {
                contains: query,
              },
            },
          ],
        },
        include: {
          alternatives: true,
          keywords: true,
        },
      });

      return new RepositoryResponse({ statusCode: 200, data });
    } catch (error) {
      console.error('Quiz Repository Error [search]:');
      console.error(error);

      return new RepositoryResponse({ statusCode: 500 });
    }
  }

  public async search({
    props,
    notProps = {},
  }: {
    props: Optional<
      IQuizDTOProps,
      | 'id'
      | 'slug'
      | 'title'
      | 'shortDescription'
      | 'questionStatement'
      | 'active'
      | 'type'
      | 'alternatives'
      | 'keywords'
      | 'createdAt'
      | 'updatedAt'
    >;
    notProps?: Optional<
      IQuizDTOProps,
      | 'id'
      | 'slug'
      | 'title'
      | 'shortDescription'
      | 'questionStatement'
      | 'active'
      | 'type'
      | 'alternatives'
      | 'keywords'
      | 'createdAt'
      | 'updatedAt'
    >;
  }) {
    try {
      if (!Object.keys(props).length) {
        return new RepositoryResponse({ statusCode: 400 });
      }

      const getWhere = (
        _props: Optional<
          IQuizDTOProps,
          | 'id'
          | 'slug'
          | 'title'
          | 'shortDescription'
          | 'questionStatement'
          | 'active'
          | 'type'
          | 'alternatives'
          | 'keywords'
          | 'createdAt'
          | 'updatedAt'
        >,
      ) => {
        return Object.entries(_props).reduce<GetWhereTypeProps>(
          (acc, [key, value]) => {
            if (key === 'alternatives') {
              const alternatives = value as AlternativeModelProps[];
              if (alternatives.length) {
                acc[key] = {
                  every: {
                    ...alternatives[0],
                    AND: alternatives.slice(1),
                  },
                };
              }
            }

            if (key === 'keywords') {
              const keywords = value as KeywordModelProps[];
              if (keywords.length) {
                acc[key] = {
                  every: {
                    ...keywords[0],
                    AND: keywords.slice(1),
                  },
                };
              }
            }

            acc[key as keyof GetWhereTypeProps] = value as any;

            return acc;
          },
          {},
        );
      };

      const where = getWhere(props);

      const data = await this.prisma.question.findMany({
        where: {
          ...where,
          ...(Object.keys(notProps).length
            ? {
                NOT: getWhere(notProps),
              }
            : {}),
        },
        include: {
          alternatives: true,
          keywords: true,
        },
      });

      return new RepositoryResponse<QuizRepositoryProps[]>({
        statusCode: 200,
        data,
      });
    } catch (error) {
      console.error('Quiz Repository Error [search]:');
      console.error(error);

      return new RepositoryResponse({ statusCode: 500 });
    }
  }

  public async findUniqueById(id: string) {
    try {
      const data = await this.prisma.question.findUnique({
        where: {
          id,
        },
        include: {
          alternatives: true,
          keywords: true,
        },
      });

      if (!data?.id?.length) {
        return new RepositoryResponse({
          statusCode: 404,
          message: 'Quiz não encontrado!',
        });
      }

      return new RepositoryResponse<QuizRepositoryProps>({
        statusCode: 200,
        data: data,
      });
    } catch (error) {
      console.error('Quiz Repository Error [findUniqueById]:');
      console.error(error);

      return new RepositoryResponse({ statusCode: 500 });
    }
  }
}
