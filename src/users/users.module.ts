import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Feedback} from '../feedback/feedback.entity';
import {LoanGame} from '../loanGame/loanGame.entity';
import {Privilege} from '../privilege/privilege.entity';
import {Reservation} from '../reservation/reservation.entity';
import {JwtStrategy} from './auth/jwt-strategy';
import {User} from './user.entity';
import {UsersAuthController} from './users.auth.controller';
import {UsersController} from './users.controller';
import {usersProviders} from './users.providers';
import {UsersService} from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Privilege,
      Reservation,
      LoanGame,
      Feedback,
      User,
    ]),
  ],
  controllers: [UsersController, UsersAuthController],
  providers: [usersProviders, UsersService, JwtStrategy],
  exports: [UsersService],
})
export class UsersModule {}
