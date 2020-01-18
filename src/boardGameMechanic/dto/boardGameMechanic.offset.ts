import { ApiModelProperty } from '@nestjs/swagger';
import { BoardGameMechanicDto } from '../../boardGameMechanic/dto/boardGameMechanic.dto';

export class BoardGameMechanicOffset {

    @ApiModelProperty()
    readonly rows: BoardGameMechanicDto[];
    
    @ApiModelProperty()
    readonly count: number;

    constructor(boardGameMechanicOffset: BoardGameMechanicOffset) {
        this.rows = boardGameMechanicOffset.rows;
        this.count = boardGameMechanicOffset.count;
    }
}
