import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePrivilegeDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;
}
