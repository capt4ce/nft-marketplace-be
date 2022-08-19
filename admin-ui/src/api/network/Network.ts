import { Collection } from "../collection/Collection";
import { Currency } from "../currency/Currency";

export type Network = {
  activatedDate: Date | null;
  collections?: Array<Collection>;
  createdAt: Date;
  currencies?: Array<Currency>;
  id: string;
  name: string;
  networkSymbol: string;
  updatedAt: Date;
};
