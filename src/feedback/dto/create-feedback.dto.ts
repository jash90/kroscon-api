import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';

export class CreateFeedbackDto {
  @ApiProperty()
  @IsNumber()
  readonly userId: number;

  @ApiProperty()
  @IsNumber()
  readonly boardGameId: number;

  @ApiProperty()
  @IsNumber()
  readonly loanGameId: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(10)
  readonly rating: number;
}
