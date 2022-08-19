import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";
import { NetworkTitle } from "../network/NetworkTitle";
import { UserTitle } from "../user/UserTitle";

export const CollectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Collection Symbol" source="collectionSymbol" />
        <TextInput label="Contract Address" source="contractAddress" />
        <TextInput label="Cover Image" source="coverImage" />
        <div />
        <TextInput label="Deleted At" source="deletedAt" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Display Image" source="displayImage" />
        <TextInput label="Display Name" source="displayName" />
        <BooleanInput label="Is Logical" source="isLogical" />
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Listed At" source="listedAt" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="network.id" reference="Network" label="Network">
          <SelectInput optionText={NetworkTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="owner"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Platform Fee Permyriad"
          source="platformFeePermyriad"
        />
        <SelectInput
          source="protocolType"
          label="Protocol Type"
          choices={[
            { label: "ERC721", value: "Erc721" },
            { label: "ERC1155", value: "Erc1155" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="Royalty Permyriad"
          source="royaltyPermyriad"
        />
        <TextInput label="Royalty Receiver" source="royaltyReceiver" />
      </SimpleForm>
    </Edit>
  );
};
