import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsDate, IsNumber, IsUUID } from 'class-validator';

export class UpdateReservationDto {

    @IsOptional()
    @ApiModelProperty()
    @IsDate()
    time: Date;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    userId: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    boardGameId: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    tableId: number;

}
