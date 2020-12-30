import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BoardGame} from '../boardGame/boardGame.entity';
import {Feedback} from '../feedback/feedback.entity';
import {Table} from '../table/table.entity';
import {User} from '../users/user.entity';
import {LoanGame} from './loanGame.entity';
import {LoanGamesController} from './loanGames.controller';
import {loanGamesProviders} from './loanGames.providers';
import {LoanGamesService} from './loanGames.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoanGame, User, BoardGame, Table, Feedback]),
  ],
  controllers: [LoanGamesController],
  providers: [loanGamesProviders, LoanGamesService],
})
export class LoanGamesModule {}
