import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateLoanGameDto {
  @ApiProperty()
  @IsDate()
  @IsOptional()
  start: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  end: Date;

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
  tableId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  hireUserId: number;
}
