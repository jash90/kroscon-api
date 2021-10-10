import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class UpdateFeedbackDto {
  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(10)
  rating: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  userId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  boardGameId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  loanGameId: number;
}
