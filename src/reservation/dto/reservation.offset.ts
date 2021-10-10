import { ApiProperty } from '@nestjs/swagger';
import { ReservationDto } from './reservation.dto';

export class ReservationOffset {
  @ApiProperty()
  readonly rows: ReservationDto[];
  @ApiProperty()
  readonly count: number;

  constructor(reservationOffset: ReservationOffset) {
    this.rows = reservationOffset.rows;
    this.count = reservationOffset.count;
  }
}
