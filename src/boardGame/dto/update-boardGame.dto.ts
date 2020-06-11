import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsNumber, Min, Max } from 'class-validator';

export class UpdateBoardGameDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    name: string;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    uuid: string;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    minPlayers: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(2)
    maxPlayers: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    playingTime: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(99)
    minAge: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    publisherId: number;

}
