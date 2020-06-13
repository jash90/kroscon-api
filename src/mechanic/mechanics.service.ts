import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Mechanic } from 'src/mechanic/mechanic.entity';
import { MechanicDto } from 'src/mechanic/dto/mechanic.dto';
import { User } from 'src/users/user.entity';
import { CreateMechanicDto } from 'src/mechanic/dto/create-mechanic.dto';
import { UpdateMechanicDto } from 'src/mechanic/dto/update-mechanic.dto';
import { MechanicOffset } from 'src/mechanic/dto/mechanic.offset';
import { BoardGame } from '../boardGame/boardGame.entity';
import { BoardGameMechanic } from 'src/boardGameMechanic/boardGameMechanic.entity';

@Injectable()
export class MechanicsService {
    constructor(
        @Inject('MechanicsRepository')
        private readonly mechanicsRepository: typeof Mechanic,
    ) { }

    async findAll(): Promise<MechanicDto[]> {
        const mechanics = await this.mechanicsRepository.findAll<Mechanic>({
            include: [BoardGameMechanic],
        });
        return mechanics.map(mechanic => {
            return new MechanicDto(mechanic);
        });
    }

    async findOne(id: number): Promise<MechanicDto> {
        const mechanic = await this.mechanicsRepository.findByPk<Mechanic>(id, {
            include: [BoardGameMechanic],
        });
        if (!mechanic) {
            throw new HttpException('No mechanic found', HttpStatus.NOT_FOUND);
        }

        return new MechanicDto(mechanic);
    }

    async create(createMechanicDto: CreateMechanicDto): Promise<MechanicDto> {
        const mechanic = new Mechanic();
        mechanic.name = createMechanicDto.name;

        try {
            const mechanicData = await mechanic.save();
            return new MechanicDto(mechanicData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getMechanic(id: number): Promise<Mechanic> {
        const mechanic = await this.mechanicsRepository.findByPk<Mechanic>(id, {
            include: [BoardGameMechanic],
        });
        if (!mechanic) {
            throw new HttpException('No mechanic found', HttpStatus.NOT_FOUND);
        }

        return mechanic;
    }

    async update(
        id: number,
        updateMechanicDto: UpdateMechanicDto,
    ): Promise<MechanicDto> {
        const mechanic = await this.getMechanic(id);

        mechanic.name = updateMechanicDto.name || mechanic.name;

        try {
            const mechanicData = await mechanic.save();
            return new MechanicDto(mechanicData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<MechanicDto> {
        const mechanic = await this.getMechanic(id);
        await mechanic.destroy();
        return new MechanicDto(mechanic);
    }

    async offset(index: number = 0): Promise<MechanicOffset> {
        const mechanics = await this.mechanicsRepository.findAndCountAll({
            include: [BoardGameMechanic],
            limit: 100,
            offset: index * 100,
            order: ['id'],
        });

        const MechanicsDto = mechanics.rows.map(mechanic => {
            return new MechanicDto(mechanic);
        });

        return { rows: MechanicsDto, count: mechanics.count };
    }

}
