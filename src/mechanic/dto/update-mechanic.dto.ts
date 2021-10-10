import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMechanicDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;
}
