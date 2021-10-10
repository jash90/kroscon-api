import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';

export class CreateReservationDto {
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
  @IsDate()
  readonly time: Date;
}
