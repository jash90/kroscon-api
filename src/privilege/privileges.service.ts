import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Privilege } from 'src/privilege/privilege.entity';
import { PrivilegeDto } from 'src/privilege/dto/privilege.dto';
import { CreatePrivilegeDto } from 'src/privilege/dto/create-privilege.dto';
import { UpdatePrivilegeDto } from 'src/privilege/dto/update-privilege.dto';
import { PrivilegeOffset } from 'src/privilege/dto/privilege.offset';
import { User } from 'src/users/user.entity';

@Injectable()
export class PrivilegesService {
    constructor(
        @Inject('PrivilegesRepository')
        private readonly privilegesRepository: typeof Privilege,
    ) { }

    async findAll(): Promise<PrivilegeDto[]> {
        const privileges = await this.privilegesRepository.findAll<Privilege>({
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return privileges.map(privilege => {
            return new PrivilegeDto(privilege);
        });
    }

    async findOne(id: number): Promise<PrivilegeDto> {
        const privilege = await this.privilegesRepository.findByPk<Privilege>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!privilege) {
            throw new HttpException('No privilege found', HttpStatus.NOT_FOUND);
        }

        return new PrivilegeDto(privilege);
    }

    async create(createPrivilegeDto: CreatePrivilegeDto): Promise<Privilege> {
        const privilege = new Privilege();
        privilege.name = createPrivilegeDto.name;

        try {
            return await privilege.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getPrivilege(id: number): Promise<Privilege> {
        const privilege = await this.privilegesRepository.findByPk<Privilege>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!privilege) {
            throw new HttpException('No privilege found', HttpStatus.NOT_FOUND);
        }

        return privilege;
    }

    async update(
        id: number,
        updatePrivilegeDto: UpdatePrivilegeDto,
    ): Promise<Privilege> {
        const privilege = await this.getPrivilege(id);

        privilege.name = updatePrivilegeDto.name || privilege.name;

        try {
            return await privilege.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Privilege> {
        const privilege = await this.getPrivilege(id);
        await privilege.destroy();
        return privilege;
    }

    async offset(index: number = 0): Promise<PrivilegeOffset> {
        const privileges = await this.privilegesRepository.findAndCountAll({
            include: [User],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const PrivilegesDto = privileges.rows.map(privilege => {
            return new PrivilegesDto(privilege);
        });

        return { rows: PrivilegesDto, count: privileges.count };
    }

}
