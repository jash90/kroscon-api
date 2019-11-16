import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateBoardGameMechanicDto {

    @ApiModelProperty()
    @IsNumber()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly mechanicId: number;

}
