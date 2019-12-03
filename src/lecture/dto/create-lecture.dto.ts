import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, } from 'class-validator';

export class CreateLectureDto {

    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsDate()
    readonly start: Date;

    @ApiModelProperty()
    @IsDate()
    readonly end: Date;

    @ApiModelProperty()
    @IsString()
    readonly description: string;

    @ApiModelProperty()
    @IsNumber()
    readonly eventId: number;
}
