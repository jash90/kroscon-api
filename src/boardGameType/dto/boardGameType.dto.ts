import { ApiModelProperty } from '@nestjs/swagger';
import { BoardGameType } from '../boardGameType.entity';

export class BoardGameTypeDto {
    @ApiModelProperty()
    readonly id: number;

    constructor(boardGameType: BoardGameType) {
        this.id = boardGameType.id;
    }
}
