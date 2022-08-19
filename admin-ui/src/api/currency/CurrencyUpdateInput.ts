import { NetworkWhereUniqueInput } from "../network/NetworkWhereUniqueInput";
import { TransactionUpdateManyWithoutCurrenciesInput } from "./TransactionUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  activatedAt?: Date | null;
  contractAddress?: string | null;
  currencySymbol?: string | null;
  decimals?: number | null;
  deletedAt?: Date | null;
  displayImage?: string | null;
  liquidityAddress?: string | null;
  name?: string | null;
  network?: NetworkWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutCurrenciesInput;
};
