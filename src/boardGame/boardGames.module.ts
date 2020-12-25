import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { BoardGamesController } from "./boardGames.controller";
import { BoardGamesService } from "./boardGames.service";
import { boardGamesProviders } from "./boardGames.providers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardGame } from "./boardGame.entity";
import { Publisher } from "../publisher/publisher.entity";
import { Mechanic } from "../mechanic/mechanic.entity";
import { LoanGame } from "../loanGame/loanGame.entity";
import { Reservation } from "../reservation/reservation.entity";
import { Feedback } from "../feedback/feedback.entity";
import { Type } from "../type/type.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BoardGame,
      Publisher,
      Mechanic,
      LoanGame,
      Reservation,
      Feedback,
      Type
    ])
  ],
  controllers: [BoardGamesController],
  providers: [BoardGamesService, ...boardGamesProviders],
  exports: []
})
export class BoardGamesModule {}
