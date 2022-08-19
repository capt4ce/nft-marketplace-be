import { NetworkWhereInput } from "./NetworkWhereInput";
import { NetworkOrderByInput } from "./NetworkOrderByInput";

export type NetworkFindManyArgs = {
  where?: NetworkWhereInput;
  orderBy?: Array<NetworkOrderByInput>;
  skip?: number;
  take?: number;
};
