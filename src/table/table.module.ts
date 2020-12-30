import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BoardGame} from '../boardGame/boardGame.entity';
import {Reservation} from '../reservation/reservation.entity';
import {User} from '../users/user.entity';
import {TableController} from './table.controller';
import {Table} from './table.entity';
import {TableService} from './table.service';
import {tablesProviders} from './tables.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, BoardGame, User, Table])],
  controllers: [TableController],
  providers: [tablesProviders, TableService],
})
export class TableModule {}
