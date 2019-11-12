import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, } from 'class-validator';

export class CreateBoardGameDto {

    @ApiModelProperty()
    @IsString()
    readonly name: string;

}
