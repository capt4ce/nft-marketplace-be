/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCurrencyArgs } from "./CreateCurrencyArgs";
import { UpdateCurrencyArgs } from "./UpdateCurrencyArgs";
import { DeleteCurrencyArgs } from "./DeleteCurrencyArgs";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyFindUniqueArgs } from "./CurrencyFindUniqueArgs";
import { Currency } from "./Currency";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { Network } from "../../network/base/Network";
import { CurrencyService } from "../currency.service";

@graphql.Resolver(() => Currency)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CurrencyResolverBase {
  constructor(
    protected readonly service: CurrencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  async _currenciesMeta(
    @graphql.Args() args: CurrencyFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Currency])
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  async currencies(
    @graphql.Args() args: CurrencyFindManyArgs
  ): Promise<Currency[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Currency, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "own",
  })
  async currency(
    @graphql.Args() args: CurrencyFindUniqueArgs
  ): Promise<Currency | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Currency)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "create",
    possession: "any",
  })
  async createCurrency(
    @graphql.Args() args: CreateCurrencyArgs
  ): Promise<Currency> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        network: args.data.network
          ? {
              connect: args.data.network,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Currency)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateCurrency(
    @graphql.Args() args: UpdateCurrencyArgs
  ): Promise<Currency | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          network: args.data.network
            ? {
                connect: args.data.network,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Currency)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "delete",
    possession: "any",
  })
  async deleteCurrency(
    @graphql.Args() args: DeleteCurrencyArgs
  ): Promise<Currency | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction])
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async transactions(
    @graphql.Parent() parent: Currency,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Network, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Network",
    action: "read",
    possession: "any",
  })
  async network(@graphql.Parent() parent: Currency): Promise<Network | null> {
    const result = await this.service.getNetwork(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
