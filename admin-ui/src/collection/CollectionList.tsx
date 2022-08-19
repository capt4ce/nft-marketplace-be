import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { NETWORK_TITLE_FIELD } from "../network/NetworkTitle";

export const CollectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Collections"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Network" source="network.id" reference="Network">
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
    </List>
  );
};
