import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { UserUpdateManyWithoutItemsInput } from "./UserUpdateManyWithoutItemsInput";
import { TransactionUpdateManyWithoutItemsInput } from "./TransactionUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  collection?: CollectionWhereUniqueInput | null;
  metadata?: string | null;
  owner?: UserUpdateManyWithoutItemsInput;
  tokenId?: string | null;
  transactions?: TransactionUpdateManyWithoutItemsInput;
};
