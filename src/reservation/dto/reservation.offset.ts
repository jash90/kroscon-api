import { ApiModelProperty } from '@nestjs/swagger';
import { ReservationDto } from 'src/reservation/dto/reservation.dto';

export class ReservationOffset {
    @ApiModelProperty()
    readonly rows: ReservationDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(reservationOffset: ReservationOffset) {
        this.rows = reservationOffset.rows;
        this.count = reservationOffset.count;
    }
}
