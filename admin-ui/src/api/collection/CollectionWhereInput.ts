import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { NetworkWhereUniqueInput } from "../network/NetworkWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CollectionWhereInput = {
  collectionSymbol?: StringNullableFilter;
  contractAddress?: StringNullableFilter;
  coverImage?: StringNullableFilter;
  customAttributes?: JsonFilter;
  deletedAt?: StringNullableFilter;
  displayImage?: StringNullableFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  isLogical?: BooleanNullableFilter;
  items?: ItemListRelationFilter;
  listedAt?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  network?: NetworkWhereUniqueInput;
  owner?: UserListRelationFilter;
  protocolType?: "Erc721" | "Erc1155";
};