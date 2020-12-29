import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardGame } from "../boardGame/boardGame.entity";
import { LoanGame } from "../loanGame/loanGame.entity";
import { User } from "../users/user.entity";
import { FeedbacksController } from "./feedbacks.controller";
import { FeedbacksService } from "./feedbacks.service";
import { feedbacksProviders } from './feedbacks.providers';
@Module({
  imports: [TypeOrmModule.forFeature([LoanGame, User, BoardGame])],
  controllers: [FeedbacksController],
  providers: [feedbacksProviders, FeedbacksService],
})
export class FeedbacksModule { }

