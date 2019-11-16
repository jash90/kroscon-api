import { ApiModelProperty } from '@nestjs/swagger';
import { LoanGameDto } from 'src/loanGame/dto/loanGame.dto';

export class LoanGameOffset {
    @ApiModelProperty()
    readonly rows: LoanGameDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(loanGameOffset: LoanGameOffset) {
        this.rows = loanGameOffset.rows;
        this.count = loanGameOffset.count;
    }
}
