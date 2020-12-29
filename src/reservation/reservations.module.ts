import { Module } from "@nestjs/common";
import { ReservationsController } from "./reservations.controller";
import { ReservationsService } from "./reservations.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "../users/user.entity";
import { BoardGame } from "../boardGame/boardGame.entity";
import { Table } from "../table/table.entity";
import { Reservation } from './reservation.entity';
import { reservationsProviders } from './reservations.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, BoardGame, User, Table, ])],
  controllers: [ReservationsController],
  providers: [reservationsProviders, ReservationsService],
})
export class ReservationsModule {}
