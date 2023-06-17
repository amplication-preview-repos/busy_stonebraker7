import { HospitalEntry as THospitalEntry } from "../api/hospitalEntry/HospitalEntry";

export const HOSPITALENTRY_TITLE_FIELD = "analyst";

export const HospitalEntryTitle = (record: THospitalEntry): string => {
  return record.analyst || String(record.id);
};
