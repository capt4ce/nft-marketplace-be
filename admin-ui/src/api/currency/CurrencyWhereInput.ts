import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NetworkWhereUniqueInput } from "../network/NetworkWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CurrencyWhereInput = {
  activatedAt?: DateTimeNullableFilter;
  contractAddress?: StringNullableFilter;
  currencySymbol?: StringNullableFilter;
  decimals?: IntNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  displayImage?: StringNullableFilter;
  id?: StringFilter;
  liquidityAddress?: StringNullableFilter;
  name?: StringNullableFilter;
  network?: NetworkWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
};
