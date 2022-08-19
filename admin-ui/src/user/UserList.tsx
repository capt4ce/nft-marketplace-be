import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cover Image" source="coverImage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Custom Attributes" source="customAttributes" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Description" source="description" />
        <TextField label="Disabled At" source="disabledAt" />
        <TextField label="Display Image" source="displayImage" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
