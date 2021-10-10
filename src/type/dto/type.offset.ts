import { ApiProperty } from '@nestjs/swagger';
import { TypeDto } from './type.dto';

export class TypeOffset {
  @ApiProperty()
  readonly rows: TypeDto[];
  @ApiProperty()
  readonly count: number;

  constructor(typeOffset: TypeOffset) {
    this.rows = typeOffset.rows;
    this.count = typeOffset.count;
  }
}
