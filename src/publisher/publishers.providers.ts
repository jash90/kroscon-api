import { Connection } from "typeorm";
import { Publisher } from "./publisher.entity";

export const publishersProviders = [
  {
    provide: "PublishersRepository",
    useFactory: (connection: Connection) => connection.getRepository(Publisher),
    inject: ["DatabaseConnection"]
  }
];
