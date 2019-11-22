import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDate } from 'class-validator';

export class CreateEventDto {

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
    @IsString()
    readonly location: string;

}