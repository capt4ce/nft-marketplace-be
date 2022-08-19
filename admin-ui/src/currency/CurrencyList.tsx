import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NETWORK_TITLE_FIELD } from "../network/NetworkTitle";

export const CurrencyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Currencies"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Network" source="network.id" reference="Network">
          <TextField source={NETWORK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
