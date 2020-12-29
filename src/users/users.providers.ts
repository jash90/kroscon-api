import { Connection } from "typeorm";
import { User } from "./user.entity";

export const usersProviders = {
  provide: "UsersRepository",
  useFactory: (connection: Connection) => connection.getRepository(User),
  inject: [Connection]
};