import { CollectionUpdateManyWithoutNetworksInput } from "./CollectionUpdateManyWithoutNetworksInput";
import { CurrencyUpdateManyWithoutNetworksInput } from "./CurrencyUpdateManyWithoutNetworksInput";

export type NetworkUpdateInput = {
  activatedDate?: Date | null;
  collections?: CollectionUpdateManyWithoutNetworksInput;
  currencies?: CurrencyUpdateManyWithoutNetworksInput;
  name?: string;
  networkSymbol?: string;
};
