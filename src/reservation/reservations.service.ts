import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {getRepository, Repository} from 'typeorm';
import {CreateReservationDto} from './dto/create-reservation.dto';
import {ReservationDto} from './dto/reservation.dto';
import {ReservationOffset} from './dto/reservation.offset';
import {UpdateReservationDto} from './dto/update-reservation.dto';
import {Reservation} from './reservation.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @Inject('ReservationsRepository')
    private readonly reservationsRepository: Repository<Reservation>,
  ) {}

  async findAll(): Promise<ReservationDto[]> {
    const reservations = await this.reservationsRepository.find({
      relations: ['user', 'boardGame', 'table'],
    });
    return reservations.map(reservation => {
      return new ReservationDto(reservation);
    });
  }

  async findOne(id: number): Promise<ReservationDto> {
    const reservation = await this.reservationsRepository.findOne(id, {
      relations: ['user', 'boardGame', 'table'],
    });
    if (!reservation) {
      throw new HttpException('No reservation found', HttpStatus.NOT_FOUND);
    }

    return new ReservationDto(reservation);
  }

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<ReservationDto> {
    const reservation = new Reservation();
    reservation.time = createReservationDto.time;

    try {
      return new ReservationDto(
        await getRepository(Reservation).save(reservation),
      );
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getReservation(id: number): Promise<Reservation> {
    const reservation = await this.reservationsRepository.findOne(id, {
      relations: ['user', 'boardGame', 'table'],
    });
    if (!reservation) {
      throw new HttpException('No reservation found', HttpStatus.NOT_FOUND);
    }

    return reservation;
  }

  async update(
    id: number,
    updateReservationDto: UpdateReservationDto,
  ): Promise<ReservationDto> {
    const reservation = await this.getReservation(id);

    reservation.time = updateReservationDto.time || reservation.time;

    try {
      return new ReservationDto(
        await getRepository(Reservation).save(reservation),
      );
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<ReservationDto> {
    const reservation = await this.getReservation(id);
    return new ReservationDto(
      await getRepository(Reservation).remove(reservation),
    );
  }

  async offset(index: number = 0): Promise<ReservationOffset> {
    const reservations = await this.reservationsRepository.findAndCount({
      relations: ['user', 'boardGame', 'table'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const ReservationsDto = reservations[0].map(reservation => {
      return new ReservationsDto(reservation);
    });

    return { rows: ReservationsDto, count: reservations[1] };
  }
}
