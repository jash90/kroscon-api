import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BoardGameType } from 'src/boardGameType/boardGameType.entity';
import { BoardGameTypeDto } from 'src/boardGameType/dto/boardGameType.dto';
import { CreateBoardGameTypeDto } from 'src/boardGameType/dto/create-boardGameType.dto';
import { UpdateBoardGameTypeDto } from 'src/boardGameType/dto/update-boardGameType.dto';
import { BoardGameTypeOffset } from 'src/boardGameType/dto/boardGameType.offset';
import { User } from 'src/users/user.entity';

@Injectable()
export class BoardGameTypesService {
    constructor(
        @Inject('BoardGameTypesRepository')
        private readonly boardGameTypesRepository: typeof BoardGameType,
    ) { }

    async findAll(): Promise<BoardGameTypeDto[]> {
        const boardGameTypes = await this.boardGameTypesRepository.findAll<BoardGameType>({
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return boardGameTypes.map(boardGameType => {
            return new BoardGameTypeDto(boardGameType);
        });
    }

    async findOne(id: number): Promise<BoardGameTypeDto> {
        const boardGameType = await this.boardGameTypesRepository.findByPk<BoardGameType>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!boardGameType) {
            throw new HttpException('No boardGameType found', HttpStatus.NOT_FOUND);
        }

        return new BoardGameTypeDto(boardGameType);
    }

    async create(createBoardGameTypeDto: CreateBoardGameTypeDto): Promise<BoardGameType> {
        const boardGameType = new BoardGameType();

        try {
            return await boardGameType.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getBoardGameType(id: number): Promise<BoardGameType> {
        const boardGameType = await this.boardGameTypesRepository.findByPk<BoardGameType>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!boardGameType) {
            throw new HttpException('No boardGameType found', HttpStatus.NOT_FOUND);
        }

        return boardGameType;
    }

    async update(
        id: number,
        updateBoardGameTypeDto: UpdateBoardGameTypeDto,
    ): Promise<BoardGameType> {
        const boardGameType = await this.getBoardGameType(id);

        try {
            return await boardGameType.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<BoardGameType> {
        const boardGameType = await this.getBoardGameType(id);
        await boardGameType.destroy();
        return boardGameType;
    }

    async offset(index: number = 0): Promise<BoardGameTypeOffset> {
        const boardGameTypes = await this.boardGameTypesRepository.findAndCountAll({
            include: [User],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const BoardGameTypesDto = boardGameTypes.rows.map(boardGameType => {
            return new BoardGameTypesDto(boardGameType);
        });

        return { rows: BoardGameTypesDto, count: boardGameTypes.count };
    }

}
