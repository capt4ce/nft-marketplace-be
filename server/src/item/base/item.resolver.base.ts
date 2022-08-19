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
import { CreateItemArgs } from "./CreateItemArgs";
import { UpdateItemArgs } from "./UpdateItemArgs";
import { DeleteItemArgs } from "./DeleteItemArgs";
import { ItemFindManyArgs } from "./ItemFindManyArgs";
import { ItemFindUniqueArgs } from "./ItemFindUniqueArgs";
import { Item } from "./Item";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { Collection } from "../../collection/base/Collection";
import { ItemService } from "../item.service";

@graphql.Resolver(() => Item)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ItemResolverBase {
  constructor(
    protected readonly service: ItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async _itemsMeta(
    @graphql.Args() args: ItemFindManyArgs
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
  @graphql.Query(() => [Item])
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async items(@graphql.Args() args: ItemFindManyArgs): Promise<Item[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Item, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "own",
  })
  async item(@graphql.Args() args: ItemFindUniqueArgs): Promise<Item | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Item)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "create",
    possession: "any",
  })
  async createItem(@graphql.Args() args: CreateItemArgs): Promise<Item> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        collection: args.data.collection
          ? {
              connect: args.data.collection,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Item)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async updateItem(@graphql.Args() args: UpdateItemArgs): Promise<Item | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          collection: args.data.collection
            ? {
                connect: args.data.collection,
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

  @graphql.Mutation(() => Item)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "delete",
    possession: "any",
  })
  async deleteItem(@graphql.Args() args: DeleteItemArgs): Promise<Item | null> {
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
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async owner(
    @graphql.Parent() parent: Item,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findOwner(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction])
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async transactions(
    @graphql.Parent() parent: Item,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Collection, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Collection",
    action: "read",
    possession: "any",
  })
  async collection(@graphql.Parent() parent: Item): Promise<Collection | null> {
    const result = await this.service.getCollection(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
