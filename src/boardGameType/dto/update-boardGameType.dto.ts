import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsNumber } from 'class-validator';

export class UpdateBoardGameTypeDto {
    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    typeId: number;
}
