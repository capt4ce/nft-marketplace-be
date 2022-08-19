import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  coverImage?: SortOrder;
  createdAt?: SortOrder;
  customAttributes?: SortOrder;
  deletedAt?: SortOrder;
  description?: SortOrder;
  disabledAt?: SortOrder;
  displayImage?: SortOrder;
  displayName?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
