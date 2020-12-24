import { Module } from "@nestjs/common";
import { FeedbacksModule } from "./feedback/feedbacks.module";
import { LecturesModule } from "./lecture/lectures.module";
import { UsersModule } from "./users/users.module";
import { SharedModule } from "./shared/shared.module";
import { ReservationsModule } from "./reservation/reservations.module";
import { BoardGamesModule } from "./boardGame/boardGames.module";
import { EventsModule } from "./event/events.module";
import { LoanGamesModule } from "./loanGame/loanGames.module";
import { MechanicsModule } from "./mechanic/mechanics.module";
import { PublishersModule } from "./publisher/publishers.module";
import { TableModule } from "./table/table.module";
import { TypesModule } from "./type/types.module";
import { PrivilegesModule } from "./privilege/privileges.module";

@Module({
  imports: [
    UsersModule,
    SharedModule,
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
  providers: []
})
export class AppModule {}
