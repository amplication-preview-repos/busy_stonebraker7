/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumHospitalEntryStatus } from "./EnumHospitalEntryStatus";
import { EnumHospitalEntryStatus1 } from "./EnumHospitalEntryStatus1";

@InputType()
class HospitalEntryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  analyst?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  caller?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hospital?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumHospitalEntryStatus,
  })
  @IsEnum(EnumHospitalEntryStatus)
  @IsOptional()
  @Field(() => EnumHospitalEntryStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumHospitalEntryStatus1,
  })
  @IsEnum(EnumHospitalEntryStatus1)
  @IsOptional()
  @Field(() => EnumHospitalEntryStatus1, {
    nullable: true,
  })
  status1?: "Option1" | null;
}

export { HospitalEntryUpdateInput as HospitalEntryUpdateInput };
