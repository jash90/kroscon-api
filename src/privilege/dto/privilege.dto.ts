import { ApiModelProperty } from "@nestjs/swagger";
import { Privilege } from "../privilege.entity";

export class PrivilegeDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly name: string;

  constructor(privilege: Privilege) {
    this.id = privilege.id;
    this.name = privilege.name;
  }
}