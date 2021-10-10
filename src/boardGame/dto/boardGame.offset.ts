import { ApiProperty } from '@nestjs/swagger';
import { BoardGameDto } from './boardGame.dto';

export class BoardGameOffset {
  @ApiProperty()
  readonly rows: BoardGameDto[];
  @ApiProperty()
  readonly count: number;

  constructor(boardGameOffset: BoardGameOffset) {
    this.rows = boardGameOffset.rows;
    this.count = boardGameOffset.count;
  }
}
