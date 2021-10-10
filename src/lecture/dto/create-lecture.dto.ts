import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateLectureDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsDate()
  readonly start: Date;

  @ApiProperty()
  @IsDate()
  readonly end: Date;

  @ApiProperty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  readonly eventId: number;
}
