import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Reservation } from 'src/reservation/reservation.entity';
import { ReservationDto } from 'src/reservation/dto/reservation.dto';
import { CreateReservationDto } from 'src/reservation/dto/create-reservation.dto';
import { UpdateReservationDto } from 'src/reservation/dto/update-reservation.dto';
import { ReservationOffset } from 'src/reservation/dto/reservation.offset';
import { User } from 'src/users/user.entity';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Table } from '../table/table.entity';

@Injectable()
export class ReservationsService {
    constructor(
        @Inject('ReservationsRepository')
        private readonly reservationsRepository: typeof Reservation,
    ) { }

    async findAll(): Promise<ReservationDto[]> {
        const reservations = await this.reservationsRepository.findAll<Reservation>({
            include: [User, BoardGame, Table],
        });
        return reservations.map(reservation => {
            return new ReservationDto(reservation);
        });
    }

    async findOne(id: number): Promise<ReservationDto> {
        const reservation = await this.reservationsRepository.findByPk<Reservation>(id, {
            include: [User, BoardGame, Table],
        });
        if (!reservation) {
            throw new HttpException('No reservation found', HttpStatus.NOT_FOUND);
        }

        return new ReservationDto(reservation);
    }

    async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
        const reservation = new Reservation();
        reservation.time = createReservationDto.time;
        reservation.userId = createReservationDto.userId;
        reservation.tableId = createReservationDto.tableId;
        reservation.boardGameId = createReservationDto.boardGameId;

        try {
            return await reservation.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getReservation(id: number): Promise<Reservation> {
        const reservation = await this.reservationsRepository.findByPk<Reservation>(id, {
            include: [User, BoardGame, Table],
        });
        if (!reservation) {
            throw new HttpException('No reservation found', HttpStatus.NOT_FOUND);
        }

        return reservation;
    }

    async update(
        id: number,
        updateReservationDto: UpdateReservationDto,
    ): Promise<Reservation> {
        const reservation = await this.getReservation(id);

        reservation.time = updateReservationDto.time || reservation.time;
        reservation.userId = updateReservationDto.userId || reservation.userId;
        reservation.tableId = updateReservationDto.tableId || reservation.tableId;
        reservation.boardGameId = updateReservationDto.boardGameId || reservation.boardGameId;

        try {
            return await reservation.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Reservation> {
        const reservation = await this.getReservation(id);
        await reservation.destroy();
        return reservation;
    }

    async offset(index: number = 0): Promise<ReservationOffset> {
        const reservations = await this.reservationsRepository.findAndCountAll({
            include: [User, BoardGame, Table],
            limit: 100,
            offset: index * 100,
            order: ['id'],
        });

        const ReservationsDto = reservations.rows.map(reservation => {
            return new ReservationsDto(reservation);
        });

        return { rows: ReservationsDto, count: reservations.count };
    }

}
