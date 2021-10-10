import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTypeDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;
}
