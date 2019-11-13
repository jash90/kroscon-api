import { ApiModelProperty } from '@nestjs/swagger';
import { Table } from '../table.entity';

export class TableDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    constructor(table: Table) {
        this.id = table.id;
        this.name = table.name;
    }
}