import { Connection } from "typeorm";
import { Event } from "./event.entity";

export const eventsProviders = {
  provide: "EventsRepository",
  useFactory: (connection: Connection) => connection.getRepository(Event),
  inject: [Connection]
};
