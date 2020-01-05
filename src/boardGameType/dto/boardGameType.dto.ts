import { ApiModelProperty } from '@nestjs/swagger';
import { BoardGameType } from '../boardGameType.entity';
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { Type } from 'src/type/type.entity';

export class BoardGameTypeDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly boardGameId: number;

    @ApiModelProperty()
    readonly boardGame: BoardGame;

    @ApiModelProperty()
    readonly typeId: number;

    @ApiModelProperty()
    readonly type: Type;

    constructor(boardGameType: BoardGameType) {
        this.id = boardGameType.id;
        this.boardGameId = boardGameType.boardGameId;
        this.boardGame = boardGameType.boardGame;
        this.typeId = boardGameType.typeId;
        this.type = boardGameType.type;
    }
}
