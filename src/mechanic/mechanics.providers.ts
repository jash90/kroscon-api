import { Connection } from "typeorm";
import { Mechanic } from "./mechanic.entity";

export const mechanicsProviders = {
  provide: "MechanicsRepository",
  useFactory: (connection: Connection) => connection.getRepository(Mechanic),
  inject: [Connection]
};
