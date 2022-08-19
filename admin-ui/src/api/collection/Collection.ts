import { JsonValue } from "type-fest";
import { Item } from "../item/Item";
import { Network } from "../network/Network";
import { User } from "../user/User";

export type Collection = {
  collectionSymbol: string | null;
  contractAddress: string | null;
  coverImage: string | null;
  createdAt: Date;
  customAttributes: JsonValue;
  deletedAt: string | null;
  description: string | null;
  displayImage: string | null;
  displayName: string | null;
  id: string;
  isLogical: boolean | null;
  items?: Array<Item>;
  listedAt: Date | null;
  name: string | null;
  network?: Network | null;
  owner?: Array<User>;
  protocolType?: "Erc721" | "Erc1155" | null;
  updatedAt: Date;
};
