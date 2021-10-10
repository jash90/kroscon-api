import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePrivilegeDto {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
