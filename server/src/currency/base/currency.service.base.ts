/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Currency, Transaction, Network } from "@prisma/client";

export class CurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CurrencyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyFindManyArgs>
  ): Promise<number> {
    return this.prisma.currency.count(args);
  }

  async findMany<T extends Prisma.CurrencyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyFindManyArgs>
  ): Promise<Currency[]> {
    return this.prisma.currency.findMany(args);
  }
  async findOne<T extends Prisma.CurrencyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyFindUniqueArgs>
  ): Promise<Currency | null> {
    return this.prisma.currency.findUnique(args);
  }
  async create<T extends Prisma.CurrencyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyCreateArgs>
  ): Promise<Currency> {
    return this.prisma.currency.create<T>(args);
  }
  async update<T extends Prisma.CurrencyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyUpdateArgs>
  ): Promise<Currency> {
    return this.prisma.currency.update<T>(args);
  }
  async delete<T extends Prisma.CurrencyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyDeleteArgs>
  ): Promise<Currency> {
    return this.prisma.currency.delete(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.prisma.currency
      .findUnique({
        where: { id: parentId },
      })
      .transactions(args);
  }

  async getNetwork(parentId: string): Promise<Network | null> {
    return this.prisma.currency
      .findUnique({
        where: { id: parentId },
      })
      .network();
  }
}
