import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { UserCreateNestedManyWithoutItemsInput } from "./UserCreateNestedManyWithoutItemsInput";
import { TransactionCreateNestedManyWithoutItemsInput } from "./TransactionCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  collection?: CollectionWhereUniqueInput | null;
  metadata?: string | null;
  owner?: UserCreateNestedManyWithoutItemsInput;
  tokenId?: string | null;
  transactions?: TransactionCreateNestedManyWithoutItemsInput;
};
