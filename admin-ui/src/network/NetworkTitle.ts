import { Network as TNetwork } from "../api/network/Network";

export const NETWORK_TITLE_FIELD = "name";

export const NetworkTitle = (record: TNetwork): string => {
  return record.name || record.id;
};
