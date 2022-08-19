import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "tokenId";

export const ItemTitle = (record: TItem): string => {
  return record.tokenId || record.id;
};
