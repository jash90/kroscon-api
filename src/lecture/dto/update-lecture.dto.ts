import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsDate, IsNumber } from 'class-validator';

export class UpdateLectureDto {

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    name: string;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    start: Date;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    end: Date;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    description: string;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    eventId: number;
}

