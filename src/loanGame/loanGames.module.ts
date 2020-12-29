import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardGame } from "../boardGame/boardGame.entity";
import { Feedback } from "../feedback/feedback.entity";
import { User } from "../users/user.entity";
import { Table } from "../table/table.entity";
import { LoanGamesController } from "./loanGames.controller";
import { LoanGamesService } from "./loanGames.service";
import { LoanGame } from './loanGame.entity';
import { loanGamesProviders } from './loanGames.providers';

@Module({
  imports: [TypeOrmModule.forFeature([LoanGame, User, BoardGame, Table, Feedback])],
  controllers: [LoanGamesController],
  providers: [loanGamesProviders, LoanGamesService]
})
export class LoanGamesModule { }
