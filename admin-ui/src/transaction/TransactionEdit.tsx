import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CurrencyTitle } from "../currency/CurrencyTitle";
import { ItemTitle } from "../item/ItemTitle";
import { UserTitle } from "../user/UserTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <TextInput label="Data" multiline source="data" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <DateTimeInput label="End Time" source="endTime" />
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <TextInput label="Item Value" source="itemValue" />
        <TextInput label="Related Transaction" source="relatedTransaction" />
        <TextInput label="Signature" source="signature" />
        <DateTimeInput label="Start Time" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Submitted", value: "Submitted" },
            { label: "Matched", value: "Matched" },
            { label: "Cancelled", value: "Cancelled" },
            { label: "Not Matched", value: "NotMatched" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Transaction Hash" source="transactionHash" />
        <SelectInput
          source="transactionType"
          label="Transaction Type"
          choices={[
            { label: "Bid", value: "Bid" },
            { label: "Offer", value: "Offer" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
