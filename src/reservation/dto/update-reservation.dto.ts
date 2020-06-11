import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsDate, IsNumber, IsUUID } from 'class-validator';

export class UpdateReservationDto {

    @IsOptional()
    @ApiModelProperty()
    @IsDate()
    readonly time: Date;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    readonly userId: string;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    readonly boardGameId: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    readonly tableId: number;

}
