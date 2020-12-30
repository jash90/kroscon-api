import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BoardGame} from '../boardGame/boardGame.entity';
import {Table} from '../table/table.entity';
import {User} from '../users/user.entity';
import {Reservation} from './reservation.entity';
import {ReservationsController} from './reservations.controller';
import {reservationsProviders} from './reservations.providers';
import {ReservationsService} from './reservations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, BoardGame, User, Table])],
  controllers: [ReservationsController],
  providers: [reservationsProviders, ReservationsService],
})
export class ReservationsModule {}
