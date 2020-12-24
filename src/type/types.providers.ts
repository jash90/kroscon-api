import { Connection } from "typeorm";
import { Type } from "./type.entity";

export const typesProviders = [
  {
    provide: "TypesRepository",
    useFactory: (connection: Connection) => connection.getRepository(Type),
    inject: ["DatabaseConnection"]
  }
];
