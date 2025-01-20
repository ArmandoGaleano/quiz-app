import type { PrismaClient } from '@prisma/client';

interface BaseRepositoryProps {
  prismaClient: PrismaClient;
}

export abstract class BaseRepository {
  private _prisma: PrismaClient;

  protected get prisma() {
    return this._prisma;
  }

  constructor({ prismaClient }: BaseRepositoryProps) {
    this._prisma = prismaClient;
  }
}
