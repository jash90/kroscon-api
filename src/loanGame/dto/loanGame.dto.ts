import { ApiModelProperty } from '@nestjs/swagger';
import { LoanGame } from '../loanGame.entity';

export class LoanGameDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly start: Date;

    @ApiModelProperty()
    readonly end: Date;

    constructor(loanGame: LoanGame) {
        this.id = loanGame.id;
        this.start = loanGame.start;
        this.end = loanGame.end;
    }
}
