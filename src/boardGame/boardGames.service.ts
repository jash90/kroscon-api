import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { BoardGame } from './boardGame.entity';
import { BoardGameDto } from './dto/boardGame.dto';
import { BoardGameOffset } from './dto/boardGame.offset';
import { CreateBoardGameDto } from './dto/create-boardGame.dto';
import { UpdateBoardGameDto } from './dto/update-boardGame.dto';

@Injectable()
export class BoardGamesService {
  constructor(
    @Inject('BoardGamesRepository')
    private readonly boardGamesRepository: Repository<BoardGame>,
  ) {}

  async findAll(): Promise<BoardGameDto[]> {
    const boardGames = await this.boardGamesRepository.find({
      relations: ['feedbacks', 'loanGames', 'publisher', 'reservations'],
    });
    return boardGames.map((boardGame) => {
      return new BoardGameDto(boardGame);
    });
  }

  async findOne(id: number): Promise<BoardGameDto> {
    const boardGame = await this.boardGamesRepository.findOne(id, {
      relations: ['feedbacks', 'loanGames', 'publisher', 'reservations'],
    });
    if (!boardGame) {
      throw new HttpException('No boardGame found', HttpStatus.NOT_FOUND);
    }

    return new BoardGameDto(boardGame);
  }

  async create(createBoardGameDto: CreateBoardGameDto): Promise<BoardGameDto> {
    const boardGame = new BoardGame();
    boardGame.name = createBoardGameDto.name;
    boardGame.uuid = createBoardGameDto.uuid;
    boardGame.minPlayers = createBoardGameDto.minPlayers;
    boardGame.maxPlayers = createBoardGameDto.maxPlayers;
    boardGame.playingTime = createBoardGameDto.playingTime;
    boardGame.minAge = createBoardGameDto.minAge;

    try {
      return new BoardGameDto(await getRepository(BoardGame).save(boardGame));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getBoardGame(id: number): Promise<BoardGame> {
    const boardGame = await this.boardGamesRepository.findOne(id, {
      relations: ['feedbacks', 'loanGames', 'publisher', 'reservations'],
    });
    if (!boardGame) {
      throw new HttpException('No boardGame found', HttpStatus.NOT_FOUND);
    }

    return boardGame;
  }

  async update(
    id: number,
    updateBoardGameDto: UpdateBoardGameDto,
  ): Promise<BoardGameDto> {
    const boardGame = await this.getBoardGame(id);

    boardGame.name = updateBoardGameDto.name || boardGame.name;
    boardGame.uuid = updateBoardGameDto.uuid || boardGame.uuid;
    boardGame.minPlayers =
      updateBoardGameDto.minPlayers || boardGame.minPlayers;
    boardGame.maxPlayers =
      updateBoardGameDto.maxPlayers || boardGame.maxPlayers;
    boardGame.playingTime =
      updateBoardGameDto.playingTime || boardGame.playingTime;
    boardGame.minAge = updateBoardGameDto.minAge || boardGame.minAge;

    try {
      return new BoardGameDto(await getRepository(BoardGame).save(boardGame));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<BoardGameDto> {
    const boardGame = await this.getBoardGame(id);
    return new BoardGameDto(await getRepository(BoardGame).save(boardGame));
  }

  async offset(index = 0): Promise<BoardGameOffset> {
    try {
      const boardGames = await this.boardGamesRepository.findAndCount({
        relations: ['feedbacks', 'loanGames', 'publisher', 'reservations'],
        take: 100,
        skip: index * 100,
        order: {
          id: 'ASC',
        },
      });

      const BoardGamesDto = boardGames[0].map((boardGame) => {
        return new BoardGameDto(boardGame);
      });

      return { rows: BoardGamesDto, count: boardGames[1] };
    } catch (err) {
      console.log(err);
    }
  }
}
