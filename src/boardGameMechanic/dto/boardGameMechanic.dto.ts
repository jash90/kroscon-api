import { ApiModelProperty } from '@nestjs/swagger';
import { BoardGameMechanic } from '../boardGameMechanic.entity';
import { IsNumber } from 'class-validator';
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { Mechanic } from 'src/mechanic/mechanic.entity';

export class BoardGameMechanicDto {
    
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly boardGameId: number;

    @ApiModelProperty()
    readonly boardGame: BoardGame;

    @ApiModelProperty()
    readonly mechanicId: number;

    @ApiModelProperty()
    readonly mechanic: Mechanic;

    constructor(boardMechanic: BoardGameMechanic) {
        this.id = boardMechanic.id;
        this.boardGameId = boardMechanic.boardGameId;
        this.boardGame = boardMechanic.boardGame;
        this.mechanicId = boardMechanic.mechanicId;
        this.mechanic = boardMechanic.mechanic;
    }
}