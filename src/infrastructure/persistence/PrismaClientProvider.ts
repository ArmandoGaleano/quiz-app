import { PrismaClient } from '@prisma/client';

export class PrismaClientProvider {
  private static instance: PrismaClient;

  static getInstance(DATABASE_URL?: string): PrismaClient {
    if (!PrismaClientProvider.instance) {
      PrismaClientProvider.instance = new PrismaClient({
        datasources: {
          db: {
            url: DATABASE_URL,
          },
        },
      });
    }

    return PrismaClientProvider.instance;
  }
}
