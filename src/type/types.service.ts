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
            include: [BoardGameType],
        });
        return types.map(type => {
            return new TypeDto(type);
        });
    }

    async findOne(id: number): Promise<TypeDto> {
        const type = await this.typesRepository.findByPk<Type>(id, {
            include: [BoardGameType],
        });
        if (!type) {
            throw new HttpException('No type found', HttpStatus.NOT_FOUND);
        }

        return new TypeDto(type);
    }

    async create(createTypeDto: CreateTypeDto): Promise<TypeDto> {
        const type = new Type();
        type.name = createTypeDto.name;

        try {
            const typeData = await type.save();
            return new TypeDto(typeData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getType(id: number): Promise<Type> {
        const type = await this.typesRepository.findByPk<Type>(id, {
            include: [BoardGameType],
        });
        if (!type) {
            throw new HttpException('No type found', HttpStatus.NOT_FOUND);
        }

        return type;
    }

    async update(
        id: number,
        updateTypeDto: UpdateTypeDto,
    ): Promise<TypeDto> {
        const type = await this.getType(id);

        type.name = updateTypeDto.name || type.name;

        try {
            const typeData = await type.save();
            return new TypeDto(typeData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<TypeDto> {
        const type = await this.getType(id);
        await type.destroy();
        return new TypeDto(type);
    }

    async offset(index: number = 0): Promise<TypeOffset> {
        const types = await this.typesRepository.findAndCountAll({
            include: [BoardGameType],
            limit: 100,
            offset: index * 100,
            order: ['id'],
        });

        const TypesDto = types.rows.map(type => {
            return new TypeDto(type);
        });

        return { rows: TypesDto, count: types.count };
    }

}
