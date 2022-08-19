import { CollectionCreateNestedManyWithoutUsersInput } from "./CollectionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ItemCreateNestedManyWithoutUsersInput } from "./ItemCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  collections?: CollectionCreateNestedManyWithoutUsersInput;
  coverImage?: string | null;
  customAttributes?: InputJsonValue;
  deletedAt?: Date | null;
  description?: string | null;
  disabledAt?: Date | null;
  displayImage?: string | null;
  displayName?: string | null;
  email?: string | null;
  firstName?: string | null;
  item?: ItemCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
