import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTableDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;
}
