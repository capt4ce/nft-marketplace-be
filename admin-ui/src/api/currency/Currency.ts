import { Network } from "../network/Network";
import { Transaction } from "../transaction/Transaction";

export type Currency = {
  activatedAt: Date | null;
  contractAddress: string | null;
  createdAt: Date;
  currencySymbol: string | null;
  decimals: number | null;
  deletedAt: Date | null;
  displayImage: string | null;
  id: string;
  liquidityAddress: string | null;
  name: string | null;
  network?: Network | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
