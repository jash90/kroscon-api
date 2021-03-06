import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Table } from 'src/table/table.entity';
import { TableDto } from 'src/table/dto/table.dto';
import { CreateTableDto } from 'src/table/dto/create-table.dto';
import { UpdateTableDto } from 'src/table/dto/update-table.dto';
import { TableOffset } from 'src/table/dto/table.offset';
import { User } from 'src/users/user.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { LoanGame } from 'src/loanGame/loanGame.entity';

@Injectable()
export class TableService {
    constructor(
        @Inject('TablesRepository')
        private readonly tablesRepository: typeof Table,
    ) { }

    async findAll(): Promise<TableDto[]> {
        const tables = await this.tablesRepository.findAll<Table>({
            include: [Reservation, LoanGame],
        });
        return tables.map(table => {
            return new TableDto(table);
        });
    }

    async findOne(id: number): Promise<TableDto> {
        const table = await this.tablesRepository.findByPk<Table>(id, {
            include: [Reservation, LoanGame],
        });
        if (!table) {
            throw new HttpException('No table found', HttpStatus.NOT_FOUND);
        }

        return new TableDto(table);
    }

    async create(CreateTableDto: CreateTableDto): Promise<Table> {
        const table = new Table();
        table.name = CreateTableDto.name;

        try {
            return await table.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getTable(id: number): Promise<Table> {
        const table = await this.tablesRepository.findByPk<Table>(id, {
            include: [Reservation, LoanGame],
        });
        if (!table) {
            throw new HttpException('No table found', HttpStatus.NOT_FOUND);
        }

        return table;
    }

    async update(
        id: number,
        UpdateTableDto: UpdateTableDto,
    ): Promise<Table> {
        const table = await this.getTable(id);

        table.name = UpdateTableDto.name || table.name;

        try {
            return await table.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Table> {
        const table = await this.getTable(id);
        await table.destroy();
        return table;
    }

    async offset(index: number = 0): Promise<TableOffset> {
        const tables = await this.tablesRepository.findAndCountAll({
            include: [Reservation, LoanGame],
            limit: 100,
            offset: index * 100,
            order: ['id'],
        });

        const TableDto = tables.rows.map(privilege => {
            return new TableDto(privilege);
        });

        return { rows: TableDto, count: TableDto.count };
    }

}
