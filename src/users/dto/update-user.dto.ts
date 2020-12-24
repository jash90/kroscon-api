import { Gender } from "../../shared/enum/enums";
import { ApiModelProperty } from "@nestjs/swagger";
import {
  IsEnum,
  IsISO8601,
  IsNumber,
  IsOptional,
  IsString
} from "class-validator";

export class UpdateUserDto {
  @ApiModelProperty()
  @IsOptional()
  @IsString()
  firstname?: string;

  @ApiModelProperty()
  @IsOptional()
  @IsString()
  lastname?: string;

  @ApiModelProperty()
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @ApiModelProperty()
  @IsOptional()
  @IsISO8601()
  birthday?: string;

  @ApiModelProperty()
  @IsNumber()
  @IsOptional()
  privilegeId?: number;
}
