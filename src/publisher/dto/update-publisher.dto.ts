import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePublisherDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;
}
