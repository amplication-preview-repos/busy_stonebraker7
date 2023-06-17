import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HospitalEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Analyst" source="analyst" />
        <TextField label="Caller" source="caller" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Hospital" source="hospital" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Status1" source="status1" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
