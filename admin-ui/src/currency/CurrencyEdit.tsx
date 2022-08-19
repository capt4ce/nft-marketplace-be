import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NetworkTitle } from "../network/NetworkTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const CurrencyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Activated At" source="activatedAt" />
        <TextInput label="Contract Address" source="contractAddress" />
        <TextInput label="Currency Symbol" source="currencySymbol" />
        <NumberInput step={1} label="Decimals" source="decimals" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Display Image" source="displayImage" />
        <TextInput label="Liquidity Address" source="liquidityAddress" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="network.id" reference="Network" label="Network">
          <SelectInput optionText={NetworkTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
