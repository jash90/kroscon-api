import { ApiModelProperty } from '@nestjs/swagger';
import { TableDto } from './table.dto';

export class TableOffset {
  @ApiModelProperty()
  readonly rows: TableDto[];
  @ApiModelProperty()
  readonly count: number;

  constructor(tableOffset: TableOffset) {
    this.rows = tableOffset.rows;
    this.count = tableOffset.count;
  }
}
