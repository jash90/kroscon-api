import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../type.entity';

export class TypeDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  constructor(type: Type) {
    this.id = type.id;
    this.name = type.name;
  }
}
