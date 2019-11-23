import { ApiModelProperty } from '@nestjs/swagger';
import { LoanGame } from '../loanGame.entity';

export class LoanGameDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly start: Date;

    @ApiModelProperty()
    readonly end: Date;

    @ApiModelProperty()
    readonly userId: number;

    @ApiModelProperty()
    readonly firstnameUser: string;

    @ApiModelProperty()
    readonly lastnameUser: string;

    @ApiModelProperty()
    readonly boardGameId: number;

    @ApiModelProperty()
    readonly nameBoardGame: string;

    @ApiModelProperty()
    readonly tableId: number;

    @ApiModelProperty()
    readonly nameTable: string;

    @ApiModelProperty()
    readonly hireUserId: number;

    @ApiModelProperty()
    readonly firstnameHireUser: string;

    @ApiModelProperty()
    readonly lastnameHireUser: string;

    constructor(loanGame: LoanGame) {
        this.id = loanGame.id;
        this.start = loanGame.start;
        this.end = loanGame.end;
        this.userId = loanGame.userId;
        this.firstnameUser = loanGame.user.firstname;
        this.lastnameUser = loanGame.user.lastname;
        this.boardGameId = loanGame.boardGameId;
        this.nameBoardGame = loanGame.boardGame.name;
        this.tableId = loanGame.tableId;
        this.nameTable = loanGame.table.name;
        this.hireUserId = loanGame.hireUserId;
        this.firstnameHireUser = loanGame.hireUser.firstname;
        this.lastnameHireUser = loanGame.hireUser.lastname;
    }
}
