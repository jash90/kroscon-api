import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateReservationDto {
  @IsOptional()
  @ApiProperty()
  @IsDate()
  time: Date;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  userId: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  boardGameId: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  tableId: number;
}
