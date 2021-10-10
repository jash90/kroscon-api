import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePublisherDto {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
