import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, } from 'class-validator';

export class CreateEventDto {

    @ApiModelProperty()
    @IsString()
    readonly name: string;

}
