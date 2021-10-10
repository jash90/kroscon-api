import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMechanicDto {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
