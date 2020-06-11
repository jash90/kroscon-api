import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, IsUUID } from 'class-validator';

export class CreateReservationDto {

    @ApiModelProperty()
    @IsNumber()
    readonly userId: string;

    @ApiModelProperty()
    @IsNumber()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly tableId: number;

    @ApiModelProperty()
    @IsDate()
    readonly time: Date;

}


