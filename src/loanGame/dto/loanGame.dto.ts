import { ApiModelProperty } from '@nestjs/swagger';
import { LoanGame } from '../loanGame.entity';

export class LoanGameDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly startLoan: Date;

    @ApiModelProperty()
    readonly endLoan: Date;

    constructor(loanGame: LoanGame) {
        this.id = loanGame.id;
        this.startLoan = loanGame.startLoan;
        this.endLoan = loanGame.endLoan;
    }
}
