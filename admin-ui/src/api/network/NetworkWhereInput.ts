import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CollectionListRelationFilter } from "../collection/CollectionListRelationFilter";
import { CurrencyListRelationFilter } from "../currency/CurrencyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type NetworkWhereInput = {
  activatedDate?: DateTimeNullableFilter;
  collections?: CollectionListRelationFilter;
  currencies?: CurrencyListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  networkSymbol?: StringFilter;
};
