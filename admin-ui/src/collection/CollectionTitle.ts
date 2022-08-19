import { Collection as TCollection } from "../api/collection/Collection";

export const COLLECTION_TITLE_FIELD = "displayName";

export const CollectionTitle = (record: TCollection): string => {
  return record.displayName || record.id;
};
