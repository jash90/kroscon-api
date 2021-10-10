import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTableDto {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
