import { Collection } from "../collection/Collection";
import { JsonValue } from "type-fest";
import { Item } from "../item/Item";
import { Transaction } from "../transaction/Transaction";

export type User = {
  collections?: Array<Collection>;
  coverImage: string | null;
  createdAt: Date;
  customAttributes: JsonValue;
  deletedAt: Date | null;
  description: string | null;
  disabledAt: Date | null;
  displayImage: string | null;
  displayName: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  item?: Array<Item>;
  lastName: string | null;
  roles: Array<string>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
