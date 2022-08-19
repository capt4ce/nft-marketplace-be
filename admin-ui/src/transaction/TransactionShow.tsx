import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Related Transaction" source="relatedTransaction" />
        <TextField label="Signature" source="signature" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="Status" source="status" />
        <TextField label="Transaction Hash" source="transactionHash" />
        <TextField label="Transaction Type" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
