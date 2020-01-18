import { ApiModelProperty } from '@nestjs/swagger';
import { BoardGameDto } from './boardGame.dto';

export class BoardGameOffset {
    @ApiModelProperty()
    readonly rows: BoardGameDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(boardGameOffset: BoardGameOffset) {
        this.rows = boardGameOffset.rows;
        this.count = boardGameOffset.count;
    }
}
