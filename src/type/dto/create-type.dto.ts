import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
