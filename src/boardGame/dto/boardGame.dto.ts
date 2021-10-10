import { ApiProperty } from '@nestjs/swagger';
import { BoardGame } from '../boardGame.entity';

export class BoardGameDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly uuid: string;

  @ApiProperty()
  readonly minPlayers: number;

  @ApiProperty()
  readonly maxPlayers: number;

  @ApiProperty()
  readonly playingTime: number;

  @ApiProperty()
  readonly minAge: number;

  @ApiProperty()
  readonly publisherId: number;

  @ApiProperty()
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
