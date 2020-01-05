import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, } from 'class-validator';

export class CreatePublisherDto {

    @ApiModelProperty()
    @IsString()
    readonly name: string;

}
