import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { NETWORK_TITLE_FIELD } from "./NetworkTitle";

export const NetworkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activated Date" source="activatedDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Network Symbol" source="networkSymbol" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Collection"
          target="NetworkId"
          label="Collections"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Network"
              source="network.id"
              reference="Network"
            >
              <TextField source={NETWORK_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Platform Fee Permyriad"
              source="platformFeePermyriad"
            />
            <TextField label="Protocol Type" source="protocolType" />
            <TextField label="Royalty Permyriad" source="royaltyPermyriad" />
            <TextField label="Royalty Receiver" source="royaltyReceiver" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Currency"
          target="NetworkId"
          label="Currencies"
        >
          <Datagrid rowClick="show">
            <TextField label="Activated At" source="activatedAt" />
            <TextField label="Contract Address" source="contractAddress" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency Symbol" source="currencySymbol" />
            <TextField label="Decimals" source="decimals" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Display Image" source="displayImage" />
            <TextField label="ID" source="id" />
            <TextField label="Liquidity Address" source="liquidityAddress" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Network"
              source="network.id"
              reference="Network"
            >
              <TextField source={NETWORK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
