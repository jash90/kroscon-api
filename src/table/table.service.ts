import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Table } from "../table/table.entity";
import { TableDto } from "../table/dto/table.dto";
import { CreateTableDto } from "../table/dto/create-table.dto";
import { UpdateTableDto } from "../table/dto/update-table.dto";
import { TableOffset } from "../table/dto/table.offset";
import { User } from "../users/user.entity";
import { Reservation } from "../reservation/reservation.entity";
import { LoanGame } from "../loanGame/loanGame.entity";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class TableService {
  constructor(
    @Inject("TablesRepository")
    private readonly tablesRepository: Repository<Table>
  ) {}

  async findAll(): Promise<TableDto[]> {
    const tables = await this.tablesRepository.find({
      relations: ["reservation", "loanGame"]
    });
    return tables.map(table => {
      return new TableDto(table);
    });
  }

  async findOne(id: number): Promise<TableDto> {
    const table = await this.tablesRepository.findOne(id, {
      relations: ["reservation", "loanGame"]
    });
    if (!table) {
      throw new HttpException("No table found", HttpStatus.NOT_FOUND);
    }

    return new TableDto(table);
  }

  async create(CreateTableDto: CreateTableDto): Promise<TableDto> {
    const table = new Table();
    table.name = CreateTableDto.name;

    try {
      return new TableDto(await getRepository(Table).save(table));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getTable(id: number): Promise<Table> {
    const table = await this.tablesRepository.findOne(id, {
      relations: ["reservation", "loanGame"]
    });
    if (!table) {
      throw new HttpException("No table found", HttpStatus.NOT_FOUND);
    }

    return table;
  }

  async update(id: number, UpdateTableDto: UpdateTableDto): Promise<TableDto> {
    const table = await this.getTable(id);

    table.name = UpdateTableDto.name || table.name;

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
      relations: ["reservation", "loanGame"],
      take: 100,
      skip: index * 100,
      order: {
        id: "ASC"
      }
    });

    const tablesDto = tables[0].map(privilege => {
      return new TableDto(privilege);
    });

    return { rows: tablesDto, count: tables[1] };
  }
}
