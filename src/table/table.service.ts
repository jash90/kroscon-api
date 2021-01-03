import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CreateTableDto } from './dto/create-table.dto';
import { TableDto } from './dto/table.dto';
import { TableOffset } from './dto/table.offset';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './table.entity';

@Injectable()
export class TableService {
  constructor(
    @Inject('TablesRepository')
    private readonly tablesRepository: Repository<Table>,
  ) { }

  async findAll(): Promise<TableDto[]> {
    const tables = await this.tablesRepository.find({
      relations: ['reservations', 'loanGames'],
    });
    return tables.map(table => {
      return new TableDto(table);
    });
  }

  async findOne(id: number): Promise<TableDto> {
    const table = await this.tablesRepository.findOne(id, {
      relations: ['reservations', 'loanGames'],
    });
    if (!table) {
      throw new HttpException('No table found', HttpStatus.NOT_FOUND);
    }

    return new TableDto(table);
  }

  async create(createTableDto: CreateTableDto): Promise<TableDto> {
    const table = new Table();
    table.name = createTableDto.name;

    try {
      return new TableDto(await getRepository(Table).save(table));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getTable(id: number): Promise<Table> {
    const table = await this.tablesRepository.findOne(id, {
      relations: ['reservations', 'loanGames'],
    });
    if (!table) {
      throw new HttpException('No table found', HttpStatus.NOT_FOUND);
    }

    return table;
  }

  async update(id: number, updateTableDto: UpdateTableDto): Promise<TableDto> {
    const table = await this.getTable(id);

    table.name = updateTableDto.name || table.name;

    try {
      return new TableDto(await getRepository(Table).save(table));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<TableDto> {
    const table = await this.getTable(id);
    return new TableDto(await getRepository(Table).remove(table));
  }

  async offset(index: number = 0): Promise<TableOffset> {
    const tables = await this.tablesRepository.findAndCount({
      relations: ['reservations', 'loanGames'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const tablesDto = tables[0].map(privilege => {
      return new TableDto(privilege);
    });

    return { rows: tablesDto, count: tables[1] };
  }
}
