import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "itemValue";

export const TransactionTitle = (record: TTransaction): string => {
  return record.itemValue || record.id;
};
