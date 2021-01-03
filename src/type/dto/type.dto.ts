import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from '../type.entity';

export class TypeDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly name: string;

  constructor(type: Type) {
    this.id = type.id;
    this.name = type.name;
  }
}
