import {HttpModule, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { BoardGamesModule } from "src/boardGame/boardGames.module";
import { EventsModule } from "src/event/events.module";
import { FeedbacksModule } from "src/feedback/feedbacks.module";
import { LecturesModule } from "src/lecture/lectures.module";
import { LoanGamesModule } from "src/loanGame/loanGames.module";
import { MechanicsModule } from "src/mechanic/mechanics.module";
import { PrivilegesModule } from "src/privilege/privileges.module";
import { PublishersModule } from "src/publisher/publishers.module";
import { ReservationsModule } from "src/reservation/reservations.module";
import { TableModule } from "src/table/table.module";
import { TypesModule } from "src/type/types.module";
import { UsersModule } from "src/users/users.module";
import {configService} from "./config/config.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UsersModule,
    BoardGamesModule,
    EventsModule,
    FeedbacksModule,
    LecturesModule,
    LoanGamesModule,
    MechanicsModule,
    PublishersModule,
    ReservationsModule,
    TableModule,
    TypesModule,
    PrivilegesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
