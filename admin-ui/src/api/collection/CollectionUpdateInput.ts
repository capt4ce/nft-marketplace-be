import { InputJsonValue } from "../../types";
import { ItemUpdateManyWithoutCollectionsInput } from "./ItemUpdateManyWithoutCollectionsInput";
import { NetworkWhereUniqueInput } from "../network/NetworkWhereUniqueInput";
import { UserUpdateManyWithoutCollectionsInput } from "./UserUpdateManyWithoutCollectionsInput";

export type CollectionUpdateInput = {
  collectionSymbol?: string | null;
  contractAddress?: string | null;
  coverImage?: string | null;
  customAttributes?: InputJsonValue;
  deletedAt?: string | null;
  description?: string | null;
  displayImage?: string | null;
  displayName?: string | null;
  isLogical?: boolean | null;
  items?: ItemUpdateManyWithoutCollectionsInput;
  listedAt?: Date | null;
  name?: string | null;
  network?: NetworkWhereUniqueInput | null;
  owner?: UserUpdateManyWithoutCollectionsInput;
  protocolType?: "Erc721" | "Erc1155" | null;
};
