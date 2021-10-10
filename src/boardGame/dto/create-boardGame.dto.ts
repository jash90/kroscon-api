import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateBoardGameDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly uuid: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  readonly minPlayers: number;

  @ApiProperty()
  @IsNumber()
  @Min(2)
  readonly maxPlayers: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  readonly playingTime: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(99)
  readonly minAge: number;

  @ApiProperty()
  @IsNumber()
  readonly publisherId: number;
}
