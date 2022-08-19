import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  currency?: CurrencyWhereUniqueInput | null;
  data?: string | null;
  deletedAt?: Date | null;
  endTime?: Date | null;
  item?: ItemWhereUniqueInput | null;
  itemValue?: string | null;
  relatedTransaction?: string | null;
  signature?: string | null;
  startTime?: Date | null;
  status?: "Submitted" | "Matched" | "Cancelled" | "NotMatched" | null;
  transactionHash?: string | null;
  transactionType?: "Bid" | "Offer" | null;
  user?: UserWhereUniqueInput | null;
};
