import { Connection } from "typeorm";
import { Reservation } from "./reservation.entity";

export const reservationsProviders = [
  {
    provide: "ReservationsRepository",
    useFactory: (connection: Connection) =>
      connection.getRepository(Reservation),
    inject: ["DatabaseConnection"]
  }
];
