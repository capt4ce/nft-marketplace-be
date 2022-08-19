import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  activatedAt?: SortOrder;
  contractAddress?: SortOrder;
  createdAt?: SortOrder;
  currencySymbol?: SortOrder;
  decimals?: SortOrder;
  deletedAt?: SortOrder;
  displayImage?: SortOrder;
  id?: SortOrder;
  liquidityAddress?: SortOrder;
  name?: SortOrder;
  networkId?: SortOrder;
  updatedAt?: SortOrder;
};
