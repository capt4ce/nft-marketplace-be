import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COLLECTION_TITLE_FIELD } from "./CollectionTitle";
import { NETWORK_TITLE_FIELD } from "../network/NetworkTitle";

export const CollectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Collection Symbol" source="collectionSymbol" />
        <TextField label="Contract Address" source="contractAddress" />
        <TextField label="Cover Image" source="coverImage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Custom Attributes" source="customAttributes" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Description" source="description" />
        <TextField label="Display Image" source="displayImage" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Logical" source="isLogical" />
        <TextField label="Listed At" source="listedAt" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Network" source="network.id" reference="Network">
          <TextField source={NETWORK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Protocol Type" source="protocolType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Item"
          target="CollectionId"
          label="Items"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Metadata" source="metadata" />
            <TextField label="Token Id" source="tokenId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
