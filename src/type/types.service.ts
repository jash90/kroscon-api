import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Type } from 'src/type/type.entity';
import { TypeDto } from 'src/type/dto/type.dto';
import { User } from 'src/users/user.entity';
import { CreateTypeDto } from 'src/type/dto/create-type.dto';
import { UpdateTypeDto } from 'src/type/dto/update-type.dto';
import { TypeOffset } from 'src/type/dto/type.offset';
import { BoardGame } from '../boardGame/boardGame.entity';
import { BoardGameType } from '../boardGameType/boardGameType.entity';

@Injectable()
export class TypesService {
    constructor(
        @Inject('TypesRepository')
        private readonly typesRepository: typeof Type,
    ) { }

    async findAll(): Promise<TypeDto[]> {
        const types = await this.typesRepository.findAll<Type>({
            include: [Type, BoardGameType],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return types.map(type => {
            return new TypeDto(type);
        });
    }

    async findOne(id: number): Promise<TypeDto> {
        const type = await this.typesRepository.findByPk<Type>(id, {
            include: [Type, BoardGameType],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!type) {
            throw new HttpException('No type found', HttpStatus.NOT_FOUND);
        }

        return new TypeDto(type);
    }

    async create(createTypeDto: CreateTypeDto): Promise<Type> {
        const type = new Type();
        type.name = createTypeDto.name;

        try {
            return await type.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getType(id: number): Promise<Type> {
        const type = await this.typesRepository.findByPk<Type>(id, {
            include: [Type, BoardGameType],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!type) {
            throw new HttpException('No type found', HttpStatus.NOT_FOUND);
        }

        return type;
    }

    async update(
        id: number,
        updateTypeDto: UpdateTypeDto,
    ): Promise<Type> {
        const type = await this.getType(id);

        type.name = updateTypeDto.name || type.name;

        try {
            return await type.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Type> {
        const type = await this.getType(id);
        await type.destroy();
        return type;
    }

    async offset(index: number = 0): Promise<TypeOffset> {
        const types = await this.typesRepository.findAndCountAll({
            include: [Type, BoardGameType],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const TypesDto = types.rows.map(type => {
            return new TypesDto(type);
        });

        return { rows: TypesDto, count: types.count };
    }

}
