import { ApiModelProperty } from '@nestjs/swagger';
import { MechanicDto } from 'src/mechanic/dto/mechanic.dto';

export class MechanicOffset {
    @ApiModelProperty()
    readonly rows: MechanicDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(mechanicOffset: MechanicOffset) {
        this.rows = mechanicOffset.rows;
        this.count = mechanicOffset.count;
    }
}
