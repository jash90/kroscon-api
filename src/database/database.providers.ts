import { Sequelize } from "sequelize-typescript";
import { User } from "../users/user.entity";
import { ConfigService } from "./../shared/config/config.service";
import { Privilege } from "src/privilege/privilege.entity";
import { BoardGame } from "src/boardGame/boardGame.entity";
import { BoardGameMechanic } from "src/boardGameMechanic/boardGameMechanic.entity";
import { BoardGameType } from "src/boardGameType/boardGameType.entity";
import { Feedback } from "src/feedback/feedback.entity";
import { Lecture } from "src/lecture/lecture.entity";
import { LoanGame } from "src/loanGame/loanGame.entity";
import { Event } from "src/event/event.entity";
import { Mechanic } from "src/mechanic/mechanic.entity";
import { Publisher } from "src/publisher/publisher.entity";
import { Reservation } from "src/reservation/reservation.entity";
import { Table } from "src/table/table.entity";
import { Type } from "src/type/type.entity";

export const databaseProviders = [
    {
        provide: "SEQUELIZE",
        useFactory: async (configService: ConfigService) => {
            const sequelize = new Sequelize(configService.sequelizeOrmConfig);
            sequelize.addModels([
                User,
                Privilege,
                BoardGame,
                BoardGameMechanic,
                BoardGameType,
                Event,
                Feedback,
                Lecture,
                LoanGame,
                Mechanic,
                Publisher,
                Reservation,
                Table,
                Type
            ]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService]
    }
];
