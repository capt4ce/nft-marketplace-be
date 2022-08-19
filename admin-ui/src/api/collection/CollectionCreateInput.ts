import { InputJsonValue } from "../../types";
import { ItemCreateNestedManyWithoutCollectionsInput } from "./ItemCreateNestedManyWithoutCollectionsInput";
import { NetworkWhereUniqueInput } from "../network/NetworkWhereUniqueInput";
import { UserCreateNestedManyWithoutCollectionsInput } from "./UserCreateNestedManyWithoutCollectionsInput";

export type CollectionCreateInput = {
  collectionSymbol?: string | null;
  contractAddress?: string | null;
  coverImage?: string | null;
  customAttributes?: InputJsonValue;
  deletedAt?: string | null;
  description?: string | null;
  displayImage?: string | null;
  displayName?: string | null;
  isLogical?: boolean | null;
  items?: ItemCreateNestedManyWithoutCollectionsInput;
  listedAt?: Date | null;
  name?: string | null;
  network?: NetworkWhereUniqueInput | null;
  owner?: UserCreateNestedManyWithoutCollectionsInput;
  platformFeePermyriad?: number | null;
  protocolType?: "Erc721" | "Erc1155" | null;
  royaltyPermyriad?: number | null;
  royaltyReceiver?: string | null;
};
