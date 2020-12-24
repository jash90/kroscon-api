import { ApiModelProperty } from "@nestjs/swagger";
import { BoardGame } from "../boardGame.entity";

export class BoardGameDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly uuid: string;

  @ApiModelProperty()
  readonly minPlayers: number;

  @ApiModelProperty()
  readonly maxPlayers: number;

  @ApiModelProperty()
  readonly playingTime: number;

  @ApiModelProperty()
  readonly minAge: number;

  @ApiModelProperty()
  readonly publisherId: number;

  @ApiModelProperty()
  readonly namePublisher: string;

  constructor(boardGame: BoardGame) {
    this.id = boardGame.id;
    this.name = boardGame.name;
    this.uuid = boardGame.uuid;
    this.minPlayers = boardGame.minPlayers;
    this.maxPlayers = boardGame.maxPlayers;
    this.minAge = boardGame.minAge;
    this.playingTime = boardGame.playingTime;
    this.namePublisher = boardGame.publisher.name;
  }
}
