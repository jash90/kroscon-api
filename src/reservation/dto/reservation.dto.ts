import { ApiModelProperty } from "@nestjs/swagger";
import { Reservation } from "../reservation.entity";
import { IsNumber, IsOptional } from "class-validator";

export class ReservationDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly time: Date;

  @ApiModelProperty()
  readonly userId: number;

  @ApiModelProperty()
  readonly firstnameUser: string;

  @ApiModelProperty()
  readonly lastnameUser: string;

  @ApiModelProperty()
  readonly boardGameId: number;

  @ApiModelProperty()
  readonly nameBoardGame: string;

  @ApiModelProperty()
  readonly tableId: number;

  @ApiModelProperty()
  readonly nameTable: string;

  constructor(reservation: Reservation) {
    this.id = reservation.id;
    this.time = reservation.time;
    this.firstnameUser = reservation.user.firstname;
    this.lastnameUser = reservation.user.lastname;
    this.nameTable = reservation.table.name;
    this.nameBoardGame = reservation.boardGame.name;
  }
}
