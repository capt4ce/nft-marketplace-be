import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CURRENCY_TITLE_FIELD } from "./CurrencyTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { NETWORK_TITLE_FIELD } from "../network/NetworkTitle";

export const CurrencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Network" source="network.id" reference="Network">
          <TextField source={NETWORK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="CurrencyId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Currency"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Data" source="data" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Item Value" source="itemValue" />
            <TextField
              label="Related Transaction"
              source="relatedTransaction"
            />
            <TextField label="Signature" source="signature" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="Status" source="status" />
            <TextField label="Transaction Hash" source="transactionHash" />
            <TextField label="Transaction Type" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
