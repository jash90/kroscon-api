import { ApiProperty } from '@nestjs/swagger';
import { Table } from '../table.entity';

export class TableDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  constructor(table: Table) {
    this.id = table.id;
    this.name = table.name;
  }
}
