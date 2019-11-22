import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, } from 'class-validator';

export class CreateBoardGameTypeDto {
    @ApiModelProperty()
    @IsNumber()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly typeId: number;
}
