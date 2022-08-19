import { NetworkWhereUniqueInput } from "../network/NetworkWhereUniqueInput";
import { TransactionCreateNestedManyWithoutCurrenciesInput } from "./TransactionCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  activatedAt?: Date | null;
  contractAddress?: string | null;
  currencySymbol?: string | null;
  decimals?: number | null;
  deletedAt?: Date | null;
  displayImage?: string | null;
  liquidityAddress?: string | null;
  name?: string | null;
  network?: NetworkWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutCurrenciesInput;
};
