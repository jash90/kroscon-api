import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BoardGameMechanic } from 'src/boardGameMechanic/boardGameMechanic.entity';
import { BoardGameMechanicDto } from 'src/boardGameMechanic/dto/boardGameMechanic.dto';
import { CreateBoardGameMechanicDto } from 'src/boardGameMechanic/dto/create-boardGameMechanic.dto';
import { UpdateBoardGameMechanicDto } from 'src/boardGameMechanic/dto/update-boardGameMechanic.dto';
import { BoardGameMechanicOffset } from 'src/boardGameMechanic/dto/boardGameMechanic.offset';
import { User } from 'src/users/user.entity';
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { Mechanic } from 'src/mechanic/mechanic.entity';

@Injectable()
export class BoardGameMechanicsService {
    constructor(
        @Inject('BoardGameMechanicsRepository')
        private readonly boardGameMechanicsRepository: typeof BoardGameMechanic,
    ) { }

    async findAll(): Promise<BoardGameMechanicDto[]> {
        const boardGameMechanics = await this.boardGameMechanicsRepository.findAll<BoardGameMechanic>({
            include: [BoardGame, Mechanic],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return boardGameMechanics.map(boardGameMechanic => {
            return new BoardGameMechanicDto(boardGameMechanic);
        });
    }

    async findOne(id: number): Promise<BoardGameMechanicDto> {
        const boardGameMechanic = await this.boardGameMechanicsRepository.findByPk<BoardGameMechanic>(id, {
            include: [BoardGame, Mechanic],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!boardGameMechanic) {
            throw new HttpException('No boardGameMechanic found', HttpStatus.NOT_FOUND);
        }

        return new BoardGameMechanicDto(boardGameMechanic);
    }

    async create(createBoardGameMechanicDto: CreateBoardGameMechanicDto): Promise<BoardGameMechanic> {
        const boardGameMechanic = new BoardGameMechanic();
        boardGameMechanic.boardGameId = createBoardGameMechanicDto.boardGameId;
        boardGameMechanic.mechanicId = createBoardGameMechanicDto.mechanicId;

        try {
            return await boardGameMechanic.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getBoardGameMechanic(id: number): Promise<BoardGameMechanic> {
        const boardGameMechanic = await this.boardGameMechanicsRepository.findByPk<BoardGameMechanic>(id, {
            include: [BoardGame, Mechanic],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!boardGameMechanic) {
            throw new HttpException('No boardGameMechanic found', HttpStatus.NOT_FOUND);
        }

        return boardGameMechanic;
    }

    async update(
        id: number,
        updateBoardGameMechanicDto: UpdateBoardGameMechanicDto,
    ): Promise<BoardGameMechanic> {
        const boardGameMechanic = await this.getBoardGameMechanic(id);

        boardGameMechanic.boardGameId = updateBoardGameMechanicDto.boardGameId || boardGameMechanic.boardGameId;
        boardGameMechanic.mechanicId = updateBoardGameMechanicDto.mechanicId || boardGameMechanic.mechanicId;

        try {
            return await boardGameMechanic.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<BoardGameMechanic> {
        const boardGameMechanic = await this.getBoardGameMechanic(id);
        await boardGameMechanic.destroy();
        return boardGameMechanic;
    }

    async offset(index: number = 0): Promise<BoardGameMechanicOffset> {
        const boardGameMechanics = await this.boardGameMechanicsRepository.findAndCountAll({
            include: [BoardGame, Mechanic],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const BoardGameMechanicsDto = boardGameMechanics.rows.map(boardGameMechanic => {
            return new BoardGameMechanicsDto(boardGameMechanic);
        });

        return { rows: BoardGameMechanicsDto, count: boardGameMechanics.count };
    }

}
