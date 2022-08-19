import { Currency } from "../currency/Currency";
import { Item } from "../item/Item";
import { User } from "../user/User";

export type Transaction = {
  createdAt: Date;
  currency?: Currency | null;
  data: string | null;
  deletedAt: Date | null;
  endTime: Date | null;
  id: string;
  item?: Item | null;
  itemValue: string | null;
  relatedTransaction: string | null;
  signature: string | null;
  startTime: Date | null;
  status?: "Submitted" | "Matched" | "Cancelled" | "NotMatched" | null;
  transactionHash: string | null;
  transactionType?: "Bid" | "Offer" | null;
  updatedAt: Date;
  user?: User | null;
};
