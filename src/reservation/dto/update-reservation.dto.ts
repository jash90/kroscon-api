import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsDate } from 'class-validator';

export class UpdateReservationDto {

    @IsOptional()
    @ApiModelProperty()
    @IsDate()
    readonly time: Date;
    
}
