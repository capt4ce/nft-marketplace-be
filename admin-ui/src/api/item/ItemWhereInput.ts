import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ItemWhereInput = {
  collection?: CollectionWhereUniqueInput;
  id?: StringFilter;
  metadata?: StringNullableFilter;
  owner?: UserListRelationFilter;
  tokenId?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
