import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from '../reservation.entity';

export class ReservationDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly time: Date;

  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly firstnameUser: string;

  @ApiProperty()
  readonly lastnameUser: string;

  @ApiProperty()
  readonly boardGameId: number;

  @ApiProperty()
  readonly nameBoardGame: string;

  @ApiProperty()
  readonly tableId: number;

  @ApiProperty()
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
