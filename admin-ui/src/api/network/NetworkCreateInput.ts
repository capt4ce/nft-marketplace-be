import { CollectionCreateNestedManyWithoutNetworksInput } from "./CollectionCreateNestedManyWithoutNetworksInput";
import { CurrencyCreateNestedManyWithoutNetworksInput } from "./CurrencyCreateNestedManyWithoutNetworksInput";

export type NetworkCreateInput = {
  activatedDate?: Date | null;
  collections?: CollectionCreateNestedManyWithoutNetworksInput;
  currencies?: CurrencyCreateNestedManyWithoutNetworksInput;
  name: string;
  networkSymbol: string;
};
