import { HospitalEntryWhereInput } from "./HospitalEntryWhereInput";
import { HospitalEntryOrderByInput } from "./HospitalEntryOrderByInput";

export type HospitalEntryFindManyArgs = {
  where?: HospitalEntryWhereInput;
  orderBy?: Array<HospitalEntryOrderByInput>;
  skip?: number;
  take?: number;
};
