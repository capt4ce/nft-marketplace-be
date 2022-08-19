import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  data?: SortOrder;
  deletedAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  itemValue?: SortOrder;
  relatedTransaction?: SortOrder;
  signature?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  transactionHash?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
