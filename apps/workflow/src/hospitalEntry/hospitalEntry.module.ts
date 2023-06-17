import { Module } from "@nestjs/common";
import { HospitalEntryModuleBase } from "./base/hospitalEntry.module.base";
import { HospitalEntryService } from "./hospitalEntry.service";
import { HospitalEntryController } from "./hospitalEntry.controller";
import { HospitalEntryResolver } from "./hospitalEntry.resolver";

@Module({
  imports: [HospitalEntryModuleBase],
  controllers: [HospitalEntryController],
  providers: [HospitalEntryService, HospitalEntryResolver],
  exports: [HospitalEntryService],
})
export class HospitalEntryModule {}
