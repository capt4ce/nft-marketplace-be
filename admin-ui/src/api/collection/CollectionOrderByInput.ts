import { SortOrder } from "../../util/SortOrder";

export type CollectionOrderByInput = {
  collectionSymbol?: SortOrder;
  contractAddress?: SortOrder;
  coverImage?: SortOrder;
  createdAt?: SortOrder;
  customAttributes?: SortOrder;
  deletedAt?: SortOrder;
  description?: SortOrder;
  displayImage?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  isLogical?: SortOrder;
  listedAt?: SortOrder;
  name?: SortOrder;
  networkId?: SortOrder;
  platformFeePermyriad?: SortOrder;
  protocolType?: SortOrder;
  royaltyPermyriad?: SortOrder;
  royaltyReceiver?: SortOrder;
  updatedAt?: SortOrder;
};
