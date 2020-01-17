import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { SharedModule } from "./shared/shared.module";
import { PrivilegesModule } from "./privilege/privileges.module";
import { BoardGamesModule } from "./boardGame/boardGames.module";
import { BoardGameMechanicsModule } from "./boardGameMechanic/boardGameMechanics.module";
import { BoardGameTypesModule } from "./boardGameType/boardGameTypes.module";
import { EventsModule } from "./event/events.module";
import { FeedbacksModule } from "./feedback/feedbacks.module";
import { LecturesModule } from "./lecture/lectures.module";
import { LoanGamesModule } from "./loanGame/loanGames.module";
import { MechanicsModule } from "./mechanic/mechanics.module";
import { PublishersModule } from "./publisher/publishers.module";
import { ReservationsModule } from "./reservation/reservations.module";
import { TableModule } from "./table/table.module";
import { TypesModule } from "./type/types.module";
import { DatabaseModule } from "./database/database.module";

@Module({
    imports: [
        UsersModule,
        SharedModule,
        PrivilegesModule,
        BoardGamesModule,
        BoardGameMechanicsModule,
        BoardGameTypesModule,
        EventsModule,
        FeedbacksModule,
        LecturesModule,
        LoanGamesModule,
        MechanicsModule,
        PublishersModule,
        ReservationsModule,
        TableModule,
        TypesModule,
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
