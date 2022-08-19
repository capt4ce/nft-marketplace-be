import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  currency?: CurrencyWhereUniqueInput;
  data?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  itemValue?: StringNullableFilter;
  relatedTransaction?: StringNullableFilter;
  signature?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Submitted" | "Matched" | "Cancelled" | "NotMatched";
  transactionHash?: StringNullableFilter;
  transactionType?: "Bid" | "Offer";
  user?: UserWhereUniqueInput;
};
