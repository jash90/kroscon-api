import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateBoardGameDto {

    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly uuid: string;

    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    readonly minPlayers: number;

    @ApiModelProperty()
    @IsNumber()
    @Min(2)
    readonly maxPlayers: number;

    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    readonly playingTime: number;

    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(99)
    readonly minAge: number;

    @ApiModelProperty()
    @IsNumber()
    readonly publisherId: number;

}