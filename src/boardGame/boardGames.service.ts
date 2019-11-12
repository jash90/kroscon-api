import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { BoardGameDto } from 'src/boardGame/dto/boardGame.dto';
import { CreateBoardGameDto } from 'src/boardGame/dto/create-boardGame.dto';
import { UpdateBoardGameDto } from 'src/boardGame/dto/update-boardGame.dto';
import { BoardGameOffset } from 'src/boardGame/dto/boardGame.offset';

@Injectable()
export class BoardGamesService {
    constructor(
        @Inject('BoardGamesRepository')
        private readonly boardGamesRepository: typeof BoardGame,
    ) { }

    async findAll(): Promise<BoardGameDto[]> {
        const boardGames = await this.boardGamesRepository.findAll<BoardGame>({
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return boardGames.map(boardGame => {
            return new BoardGameDto(boardGame);
        });
    }

    async findOne(id: number): Promise<BoardGameDto> {
        const boardGame = await this.boardGamesRepository.findByPk<BoardGame>(id, {
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

        try {
            return await boardGame.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getBoardGame(id: number): Promise<BoardGame> {
        const boardGame = await this.boardGamesRepository.findByPk<BoardGame>(id, {
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
