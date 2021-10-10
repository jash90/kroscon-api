import { ApiProperty } from '@nestjs/swagger';
import { BoardGameDto } from '../../boardGame/dto/boardGame.dto';
import { Publisher } from '../publisher.entity';

export class PublisherDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly boardGames: BoardGameDto[];

  constructor(publisher: Publisher) {
    this.id = publisher.id;
    this.name = publisher.name;
    this.boardGames = publisher.boardGames.map(
      (boardGames) => new BoardGameDto(boardGames),
    );
  }
}
