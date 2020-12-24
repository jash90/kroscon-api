import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMechanicDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;
}
