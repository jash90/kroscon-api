import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsNumber, Min, Max } from 'class-validator';

export class UpdateBoardGameDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly uuid: string;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    readonly minPlayers: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(2)
    readonly maxPlayers: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    readonly playingTime: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(99)
    readonly minAge: number;

    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    readonly publisherId: number;

}
