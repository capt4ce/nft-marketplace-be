import { Collection } from "../collection/Collection";
import { User } from "../user/User";
import { Transaction } from "../transaction/Transaction";

export type Item = {
  collection?: Collection | null;
  createdAt: Date;
  id: string;
  metadata: string | null;
  owner?: Array<User>;
  tokenId: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
