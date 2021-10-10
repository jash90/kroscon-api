import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateBoardGameDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  uuid: string;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @Min(1)
  minPlayers: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @Min(2)
  maxPlayers: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @Min(1)
  playingTime: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(99)
  minAge: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  publisherId: number;
}
