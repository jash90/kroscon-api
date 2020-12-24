import { ApiModelProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateTableDto {
  @IsOptional()
  @ApiModelProperty()
  @IsString()
  name: string;
}
