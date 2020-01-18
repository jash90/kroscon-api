import { Sequelize } from "sequelize-typescript";
import { User } from "../users/user.entity";
import { ConfigService } from "./../shared/config/config.service";
import { Privilege } from "../privilege/privilege.entity";
import { BoardGame } from "../boardGame/boardGame.entity";
import { BoardGameMechanic } from "../boardGameMechanic/boardGameMechanic.entity";
import { BoardGameType } from "../boardGameType/boardGameType.entity";
import { Feedback } from "../feedback/feedback.entity";
import { Lecture } from "../lecture/lecture.entity";
import { LoanGame } from "../loanGame/loanGame.entity";
import { Event } from "../event/event.entity";
import { Mechanic } from "../mechanic/mechanic.entity";
import { Publisher } from "../publisher/publisher.entity";
import { Reservation } from "../reservation/reservation.entity";
import { Table } from "../table/table.entity";
import { Type } from "../type/type.entity";

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
