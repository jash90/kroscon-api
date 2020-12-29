import {HttpModule, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { BoardGamesModule } from "./boardGame/boardGames.module";
import { EventsModule } from "./event/events.module";
import { FeedbacksModule } from "./feedback/feedbacks.module";
import { LecturesModule } from "./lecture/lectures.module";
import { LoanGamesModule } from "./loanGame/loanGames.module";
import { MechanicsModule } from "./mechanic/mechanics.module";
import { PrivilegesModule } from "./privilege/privileges.module";
import { PublishersModule } from "./publisher/publishers.module";
import { ReservationsModule } from "./reservation/reservations.module";
import { TableModule } from "./table/table.module";
import { TypesModule } from "./type/types.module";
import { UsersModule } from "./users/users.module";
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
