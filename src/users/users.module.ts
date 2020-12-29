import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { JwtStrategy } from "./auth/jwt-strategy";
import { UsersAuthController } from "./users.auth.controller";
import { Privilege } from "../privilege/privilege.entity";
import { Reservation } from "../reservation/reservation.entity";
import { LoanGame } from "../loanGame/loanGame.entity";
import { Feedback } from "../feedback/feedback.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { usersProviders } from './users.providers';


@Module({
  imports: [TypeOrmModule.forFeature([Privilege, Reservation, LoanGame, Feedback, User])],
  controllers: [UsersController, UsersAuthController],
  providers: [usersProviders, UsersService, JwtStrategy],
  exports: [UsersService]
})
export class UsersModule {}

