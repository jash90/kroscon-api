import { ApiProperty } from '@nestjs/swagger';
import { TableDto } from './table.dto';

export class TableOffset {
  @ApiProperty()
  readonly rows: TableDto[];
  @ApiProperty()
  readonly count: number;

  constructor(tableOffset: TableOffset) {
    this.rows = tableOffset.rows;
    this.count = tableOffset.count;
  }
}
