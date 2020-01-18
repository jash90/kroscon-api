import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BoardGame } from '../boardGame/boardGame.entity';
import { BoardGameDto } from '../boardGame/dto/boardGame.dto';
import { CreateBoardGameDto } from '../boardGame/dto/create-boardGame.dto';
import { UpdateBoardGameDto } from '../boardGame/dto/update-boardGame.dto';
import { BoardGameOffset } from '../boardGame/dto/boardGame.offset';
import { LoanGame } from '../loanGame/loanGame.entity';
import { User } from '../users/user.entity';
import { Table } from '../table/table.entity';
import { BoardGameMechanic } from '../boardGameMechanic/boardGameMechanic.entity';
import { BoardGameType } from '../boardGameType/boardGameType.entity';
import { Feedback } from '../feedback/feedback.entity';
import { Publisher } from '../publisher/publisher.entity';
import { Reservation } from '../reservation/reservation.entity';

@Injectable()
export class BoardGamesService {
    constructor(
        @Inject('BoardGamesRepository')
        private readonly boardGamesRepository: typeof BoardGame,
    ) { }

    async findAll(): Promise<BoardGameDto[]> {
        const boardGames = await this.boardGamesRepository.findAll<BoardGame>({
            include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation, Table],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return boardGames.map(boardGame => {
            return new BoardGameDto(boardGame);
        });
    }

    async findOne(id: number): Promise<BoardGameDto> {
        const boardGame = await this.boardGamesRepository.findByPk<BoardGame>(id, {
            include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation, Table],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!boardGame) {
            throw new HttpException('No boardGame found', HttpStatus.NOT_FOUND);
        }

        return new BoardGameDto(boardGame);
    }

    async create(createBoardGameDto: CreateBoardGameDto): Promise<BoardGame> {
        const boardGame = new BoardGame();
        boardGame.name = createBoardGameDto.name;
        boardGame.uuid = createBoardGameDto.uuid;
        boardGame.minPlayers = createBoardGameDto.minPlayers;
        boardGame.maxPlayers = createBoardGameDto.maxPlayers;
        boardGame.playingTime = createBoardGameDto.playingTime;
        boardGame.minAge = createBoardGameDto.minAge;
        boardGame.publisherId = createBoardGameDto.publisherId;
    
        try {
            return await boardGame.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getBoardGame(id: number): Promise<BoardGame> {
        const boardGame = await this.boardGamesRepository.findByPk<BoardGame>(id, {
            include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation, Table],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!boardGame) {
            throw new HttpException('No boardGame found', HttpStatus.NOT_FOUND);
        }

        return boardGame;
    }

    async update(
        id: number,
        updateBoardGameDto: UpdateBoardGameDto,
    ): Promise<BoardGame> {
        const boardGame = await this.getBoardGame(id);

        boardGame.name = updateBoardGameDto.name || boardGame.name;
        boardGame.uuid = updateBoardGameDto.uuid || boardGame.uuid;
        boardGame.minPlayers = updateBoardGameDto.minPlayers || boardGame.minPlayers;
        boardGame.maxPlayers = updateBoardGameDto.maxPlayers || boardGame.maxPlayers;
        boardGame.playingTime = updateBoardGameDto.playingTime || boardGame.playingTime;
        boardGame.minAge = updateBoardGameDto.minAge || boardGame.minAge;
        boardGame.publisherId = updateBoardGameDto.publisherId || boardGame.publisherId;

        try {
            return await boardGame.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<BoardGame> {
        const boardGame = await this.getBoardGame(id);
        await boardGame.destroy();
        return boardGame;
    }

    async offset(index: number = 0): Promise<BoardGameOffset> {
        const boardGames = await this.boardGamesRepository.findAndCountAll({
            include: [BoardGameMechanic, BoardGameType, Feedback, LoanGame, Publisher, Reservation, Table],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const BoardGamesDto = boardGames.rows.map(boardGame => {
            return new BoardGamesDto(boardGame);
        });

        return { rows: BoardGamesDto, count: boardGames.count };
    }

}
