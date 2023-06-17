import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HospitalEntryResolverBase } from "./base/hospitalEntry.resolver.base";
import { HospitalEntry } from "./base/HospitalEntry";
import { HospitalEntryService } from "./hospitalEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HospitalEntry)
export class HospitalEntryResolver extends HospitalEntryResolverBase {
  constructor(
    protected readonly service: HospitalEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
