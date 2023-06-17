import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HospitalEntryService } from "./hospitalEntry.service";
import { HospitalEntryControllerBase } from "./base/hospitalEntry.controller.base";

@swagger.ApiTags("hospitalEntries")
@common.Controller("hospitalEntries")
export class HospitalEntryController extends HospitalEntryControllerBase {
  constructor(
    protected readonly service: HospitalEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
