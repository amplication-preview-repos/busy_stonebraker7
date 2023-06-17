import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HospitalEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HospitalEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Analyst" source="analyst" />
        <TextField label="Caller" source="caller" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Hospital" source="hospital" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Status1" source="status1" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
