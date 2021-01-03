import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from '../feedback/feedback.entity';
import { LoanGame } from '../loanGame/loanGame.entity';
import { Mechanic } from '../mechanic/mechanic.entity';
import { Publisher } from '../publisher/publisher.entity';
import { Reservation } from '../reservation/reservation.entity';
import { Type } from '../type/type.entity';
import { BoardGame } from './boardGame.entity';
import { BoardGamesController } from './boardGames.controller';
import { boardGamesProviders } from './boardGames.providers';
import { BoardGamesService } from './boardGames.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BoardGame,
      Publisher,
      Mechanic,
      LoanGame,
      Reservation,
      Feedback,
      Type,
    ]),
  ],
  controllers: [BoardGamesController],
  providers: [boardGamesProviders, BoardGamesService],
})
export class BoardGamesModule {}
