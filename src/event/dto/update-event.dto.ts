import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  start: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  end: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location: string;
}
