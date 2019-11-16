import { ApiModelProperty } from '@nestjs/swagger';
import { MechanicDto } from 'src/mechanic/dto/mechanic.dto';

export class MechanicOffset {
    @ApiModelProperty()
    readonly rows: MechanicDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(privilegeOffset: MechanicOffset) {
        this.rows = privilegeOffset.rows;
        this.count = privilegeOffset.count;
    }
}
