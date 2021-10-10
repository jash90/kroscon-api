import { ApiProperty } from '@nestjs/swagger';
import { LoanGameDto } from './loanGame.dto';

export class LoanGameOffset {
  @ApiProperty()
  readonly rows: LoanGameDto[];
  @ApiProperty()
  readonly count: number;

  constructor(loanGameOffset: LoanGameOffset) {
    this.rows = loanGameOffset.rows;
    this.count = loanGameOffset.count;
  }
}
