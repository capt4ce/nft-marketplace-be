import { CollectionUpdateManyWithoutUsersInput } from "./CollectionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ItemUpdateManyWithoutUsersInput } from "./ItemUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  collections?: CollectionUpdateManyWithoutUsersInput;
  coverImage?: string | null;
  customAttributes?: InputJsonValue;
  deletedAt?: Date | null;
  description?: string | null;
  disabledAt?: Date | null;
  displayImage?: string | null;
  displayName?: string | null;
  email?: string | null;
  firstName?: string | null;
  item?: ItemUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
