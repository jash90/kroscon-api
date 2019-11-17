import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, } from 'class-validator';

export class CreateBoardGameTypeDto {

    @ApiModelProperty()
    @IsString()
    readonly name: string;

}
