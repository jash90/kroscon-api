import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDate, } from 'class-validator';

export class CreateReservationDto {

    @ApiModelProperty()
    @IsDate()
    readonly time: Date;

}
