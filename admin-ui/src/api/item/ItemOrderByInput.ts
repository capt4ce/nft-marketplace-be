import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  collectionId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  tokenId?: SortOrder;
  updatedAt?: SortOrder;
};
