import { User } from "../user.entity";
// import { Gender } from "../../shared/enum/enums";
import { ApiModelProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly firstname: string;

  @ApiModelProperty()
  readonly lastname: string;

  @ApiModelProperty()
  readonly age: number;

  @ApiModelProperty()
  readonly privilegeName: string;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.age = user.age;
  }
}
