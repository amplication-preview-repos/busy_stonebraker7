import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HospitalEntryServiceBase } from "./base/hospitalEntry.service.base";

@Injectable()
export class HospitalEntryService extends HospitalEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
