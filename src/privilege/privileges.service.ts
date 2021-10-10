import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { PrivilegeDto } from './dto/privilege.dto';
import { PrivilegeOffset } from './dto/privilege.offset';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { Privilege } from './privilege.entity';

@Injectable()
export class PrivilegesService {
  constructor(
    @Inject('PrivilegesRepository')
    private readonly privilegesRepository: Repository<Privilege>,
  ) {}

  async findAll(): Promise<PrivilegeDto[]> {
    const privileges = await this.privilegesRepository.find({
      relations: ['users'],
    });
    return privileges.map((privilege) => {
      return new PrivilegeDto(privilege);
    });
  }

  async findOne(id: number): Promise<PrivilegeDto> {
    const privilege = await this.privilegesRepository.findOne(id, {
      relations: ['users'],
    });
    if (!privilege) {
      throw new HttpException('No privilege found', HttpStatus.NOT_FOUND);
    }

    return new PrivilegeDto(privilege);
  }

  async create(createPrivilegeDto: CreatePrivilegeDto): Promise<PrivilegeDto> {
    const privilege = new Privilege();
    privilege.name = createPrivilegeDto.name;

    try {
      return new PrivilegeDto(await getRepository(Privilege).save(privilege));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getPrivilege(id: number): Promise<Privilege> {
    const privilege = await this.privilegesRepository.findOne(id, {
      relations: ['users'],
    });
    if (!privilege) {
      throw new HttpException('No privilege found', HttpStatus.NOT_FOUND);
    }

    return privilege;
  }

  async update(
    id: number,
    updatePrivilegeDto: UpdatePrivilegeDto,
  ): Promise<PrivilegeDto> {
    const privilege = await this.getPrivilege(id);

    privilege.name = updatePrivilegeDto.name || privilege.name;

    try {
      return new PrivilegeDto(await getRepository(Privilege).save(privilege));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<PrivilegeDto> {
    const privilege = await this.getPrivilege(id);
    return new PrivilegeDto(await getRepository(Privilege).remove(privilege));
  }

  async offset(index = 0): Promise<PrivilegeOffset> {
    const privileges = await this.privilegesRepository.findAndCount({
      relations: ['users'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const privilegesDto = privileges[0].map((privilege) => {
      return new PrivilegeDto(privilege);
    });

    return { rows: privilegesDto, count: privileges[1] };
  }
}
