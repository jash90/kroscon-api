import { Connection } from "typeorm";
import { Privilege } from "./privilege.entity";

export const privilegesProviders = [
  {
    provide: "PrivilegesRepository",
    useFactory: (connection: Connection) => connection.getRepository(Privilege),
    inject: ["DatabaseConnection"]
  }
];
