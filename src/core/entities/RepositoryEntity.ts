import type { PrismaClient } from '@prisma/client';

interface RepositoryEntityProps {
  prismaClient: PrismaClient;
}

export abstract class RepositoryEntity {
  private _prisma: PrismaClient;

  protected get prisma() {
    return this._prisma;
  }

  constructor({ prismaClient }: RepositoryEntityProps) {
    this._prisma = prismaClient;
  }
}
