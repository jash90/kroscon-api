import { ApiModelProperty } from '@nestjs/swagger';
import { PrivilegeDto } from 'src/privilege/dto/privilege.dto';

export class PrivilegeOffset {
    @ApiModelProperty()
    readonly rows: PrivilegeDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(privilegeOffset: PrivilegeOffset) {
        this.rows = privilegeOffset.rows;
        this.count = privilegeOffset.count;
    }
}
