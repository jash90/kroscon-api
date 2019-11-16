import { ApiModelProperty } from '@nestjs/swagger';
import { Reservation } from '../reservation.entity';

export class ReservationDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly time: Date;

    constructor(reservation: Reservation) {
        this.id = reservation.id;
        this.time = reservation.time;
    }
}