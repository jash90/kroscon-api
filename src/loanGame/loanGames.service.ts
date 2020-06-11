import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { LoanGameDto } from 'src/loanGame/dto/loanGame.dto';
import { CreateLoanGameDto } from 'src/loanGame/dto/create-loanGame.dto';
import { UpdateLoanGameDto } from 'src/loanGame/dto/update-loanGame.dto';
import { LoanGameOffset } from 'src/loanGame/dto/loanGame.offset';
import { User } from 'src/users/user.entity';
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { Table } from 'src/table/table.entity';

@Injectable()
export class LoanGamesService {
    constructor(
        @Inject('LoanGamesRepository')
        private readonly loanGamesRepository: typeof LoanGame,
    ) { }

    async findAll(): Promise<LoanGameDto[]> {
        const loanGames = await this.loanGamesRepository.findAll<LoanGame>({
            include: [User, BoardGame, Table],
        });
        return loanGames.map(loanGame => {
            return new LoanGameDto(loanGame);
        });
    }

    async findOne(id: number): Promise<LoanGameDto> {
        const loanGame = await this.loanGamesRepository.findByPk<LoanGame>(id, {
            include: [User, BoardGame, Table],
        });
        if (!loanGame) {
            throw new HttpException('No loanGame found', HttpStatus.NOT_FOUND);
        }

        return new LoanGameDto(loanGame);
    }

    async create(createLoanGameDto: CreateLoanGameDto): Promise<LoanGame> {
        const loanGame = new LoanGame();
        loanGame.start = createLoanGameDto.start;
        loanGame.end = null;
        loanGame.boardGameId = createLoanGameDto.boardGameId;
        loanGame.tableId = createLoanGameDto.tableId;
        loanGame.userId = createLoanGameDto.userId;
        loanGame.hireUserId = createLoanGameDto.hireUserId;

        try {
            return await loanGame.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getLoanGame(id: number): Promise<LoanGame> {
        const loanGame = await this.loanGamesRepository.findByPk<LoanGame>(id, {
            include: [User, BoardGame, Table],
        });
        if (!loanGame) {
            throw new HttpException('No loanGame found', HttpStatus.NOT_FOUND);
        }

        return loanGame;
    }

    async update(
        id: number,
        updateLoanGameDto: UpdateLoanGameDto,
    ): Promise<LoanGame> {
        const loanGame = await this.getLoanGame(id);

        loanGame.start = updateLoanGameDto.start || loanGame.start;
        loanGame.end = updateLoanGameDto.end || loanGame.end;
        loanGame.boardGameId = updateLoanGameDto.boardGameId || loanGame.boardGameId;
        loanGame.tableId = updateLoanGameDto.tableId || loanGame.tableId;
        loanGame.userId = updateLoanGameDto.userId || loanGame.userId;
        loanGame.hireUserId = updateLoanGameDto.hireUserId || loanGame.hireUserId;

        try {
            return await loanGame.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<LoanGame> {
        const loanGame = await this.getLoanGame(id);
        await loanGame.destroy();
        return loanGame;
    }

    async offset(index: number = 0): Promise<LoanGameOffset> {
        const loanGames = await this.loanGamesRepository.findAndCountAll({
            include: [User, BoardGame, Table],
            limit: 100,
            offset: index * 100,
            order: ['id'],
        });

        const LoanGamesDto = loanGames.rows.map(loanGame => {
            return new LoanGamesDto(loanGame);
        });

        return { rows: LoanGamesDto, count: loanGames.count };
    }

}
