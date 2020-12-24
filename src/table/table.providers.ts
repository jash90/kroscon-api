import { Connection } from "typeorm";
import { Table } from "./table.entity";

export const tableProviders = [
  {
    provide: "TablesRepository",
    useFactory: (connection: Connection) => connection.getRepository(Table),
    inject: ["DatabaseConnection"]
  }
];
