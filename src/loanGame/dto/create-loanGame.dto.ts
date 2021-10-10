import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateLoanGameDto {
  @ApiProperty()
  @IsDate()
  readonly start: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  readonly end: Date;

  @ApiProperty()
  @IsNumber()
  readonly userId: number;

  @ApiProperty()
  @IsNumber()
  readonly boardGameId: number;

  @ApiProperty()
  @IsNumber()
  readonly tableId: number;

  @ApiProperty()
  @IsNumber()
  readonly hireUserId: number;
}
