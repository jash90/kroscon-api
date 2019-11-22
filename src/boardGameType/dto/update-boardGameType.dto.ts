import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsNumber } from 'class-validator';

export class UpdateBoardGameTypeDto {
    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly typeId: number;
}
