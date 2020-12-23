import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { BoardGameDto } from 'src/boardGame/dto/boardGame.dto';
import { CreateBoardGameDto } from 'src/boardGame/dto/create-boardGame.dto';
import { UpdateBoardGameDto } from 'src/boardGame/dto/update-boardGame.dto';
import { BoardGameOffset } from 'src/boardGame/dto/boardGame.offset';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { User } from 'src/users/user.entity';
import { Table } from 'src/table/table.entity';
import { BoardGameMechanic } from 'src/boardGameMechanic/boardGameMechanic.entity';
import { BoardGameType } from 'src/boardGameType/boardGameType.entity';
import { Feedback } from 'src/feedback/feedback.entity';
import { Publisher } from 'src/publisher/publisher.entity';
import { Reservation } from 'src/reservation/reservation.entity';

@Injectable()
export class BoardGamesService {
    constructor(
        @Inject('BoardGamesRepository')
        private readonly boardGamesRepository: typeof BoardGame,
    ) { }

    async findAll(): Promise<BoardGameDto[]> {
        const boardGames = await this.boardGamesRepository.findAll<BoardGame>({
            include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation],
        });
        return boardGames.map(boardGame => {
            return new BoardGameDto(boardGame);
        });
    }

    async findOne(id: number): Promise<BoardGameDto> {
        const boardGame = await this.boardGamesRepository.findByPk<BoardGame>(id, {
            include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation],
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
        boardGame.publisherId = createBoardGameDto.publisherId;

        try {
            const boardGameData = await boardGame.save();
            return new BoardGameDto(boardGameData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getBoardGame(id: number): Promise<BoardGame> {
        const boardGame = await this.boardGamesRepository.findByPk<BoardGame>(id, {
            include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation],
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
        boardGame.minPlayers = updateBoardGameDto.minPlayers || boardGame.minPlayers;
        boardGame.maxPlayers = updateBoardGameDto.maxPlayers || boardGame.maxPlayers;
        boardGame.playingTime = updateBoardGameDto.playingTime || boardGame.playingTime;
        boardGame.minAge = updateBoardGameDto.minAge || boardGame.minAge;
        boardGame.publisherId = updateBoardGameDto.publisherId || boardGame.publisherId;

        try {
            const boardGameData = await boardGame.save();
            return new BoardGameDto(boardGameData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<BoardGameDto> {
        const boardGame = await this.getBoardGame(id);
        await boardGame.destroy();
        return new BoardGameDto(boardGame);
    }

    async offset(index: number = 0): Promise<BoardGameOffset> {
        try {
            const boardGames = await this.boardGamesRepository.findAndCountAll({
                include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation],
                limit: 100,
                offset: index * 100,
                order: ['id'],
            });

            const BoardGamesDto = boardGames.rows.map(boardGame => {
                return new BoardGameDto(boardGame);
            });

            return { rows: BoardGamesDto, count: boardGames.count };
        } catch (error) {
            console.log(error);
        }
    }

}
