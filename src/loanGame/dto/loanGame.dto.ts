import { ApiProperty } from '@nestjs/swagger';
import { LoanGame } from '../loanGame.entity';

export class LoanGameDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly start: Date;

  @ApiProperty()
  readonly end: Date;

  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly firstnameUser: string;

  @ApiProperty()
  readonly lastnameUser: string;

  @ApiProperty()
  readonly boardGameId: number;

  @ApiProperty()
  readonly nameBoardGame: string;

  @ApiProperty()
  readonly tableId: number;

  @ApiProperty()
  readonly nameTable: string;

  @ApiProperty()
  readonly hireUserId: number;

  @ApiProperty()
  readonly firstnameHireUser: string;

  @ApiProperty()
  readonly lastnameHireUser: string;

  constructor(loanGame: LoanGame) {
    this.id = loanGame.id;
    this.start = loanGame.start;
    this.end = loanGame.end;
    this.firstnameUser = loanGame.user.firstname;
    this.lastnameUser = loanGame.user.lastname;
    this.nameBoardGame = loanGame.boardGame.name;
    this.nameTable = loanGame.table.name;
    this.firstnameHireUser = loanGame.hireUser.firstname;
    this.lastnameHireUser = loanGame.hireUser.lastname;
  }
}
