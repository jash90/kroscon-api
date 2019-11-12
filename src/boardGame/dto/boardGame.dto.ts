import { ApiModelProperty } from '@nestjs/swagger';
import { BoardGame } from '../boardGame.entity';

export class BoardGameDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    constructor(privilege: BoardGame) {
        this.id = privilege.id;
        this.name = privilege.name;
    }
}
