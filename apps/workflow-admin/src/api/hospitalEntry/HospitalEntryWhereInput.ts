import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HospitalEntryWhereInput = {
  analyst?: StringNullableFilter;
  caller?: StringNullableFilter;
  hospital?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  status1?: "Option1";
};
