import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CollectionTitle } from "../collection/CollectionTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";

export const NetworkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Activated Date" source="activatedDate" />
        <ReferenceArrayInput
          source="collections"
          reference="Collection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollectionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="currencies"
          reference="Currency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CurrencyTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Network Symbol" source="networkSymbol" />
      </SimpleForm>
    </Edit>
  );
};
