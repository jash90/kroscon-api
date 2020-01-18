import { ApiModelProperty } from '@nestjs/swagger';
import { BoardGameTypeDto } from '../../boardGameType/dto/boardGameType.dto';

export class BoardGameTypeOffset {
    @ApiModelProperty()
    readonly rows: BoardGameTypeDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(boardGameTypeOffset: BoardGameTypeOffset) {
        this.rows = boardGameTypeOffset.rows;
        this.count = boardGameTypeOffset.count;
    }
}
