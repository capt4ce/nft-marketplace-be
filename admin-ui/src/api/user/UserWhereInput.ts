import { CollectionListRelationFilter } from "../collection/CollectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  collections?: CollectionListRelationFilter;
  coverImage?: StringNullableFilter;
  customAttributes?: JsonFilter;
  deletedAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  disabledAt?: DateTimeNullableFilter;
  displayImage?: StringNullableFilter;
  displayName?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  item?: ItemListRelationFilter;
  lastName?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
