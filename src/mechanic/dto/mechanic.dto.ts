import { ApiModelProperty } from "@nestjs/swagger";
import { Mechanic } from "../mechanic.entity";

export class MechanicDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly name: string;

  constructor(mechanic: Mechanic) {
    this.id = mechanic.id;
    this.name = mechanic.name;
  }
}