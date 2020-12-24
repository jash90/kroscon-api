import { Connection } from "typeorm";
import { Lecture } from "./lecture.entity";

export const lecturesProviders = [
  {
    provide: "LecturesRepository",
    useFactory: (connection: Connection) => connection.getRepository(Lecture),
    inject: ["DatabaseConnection"]
  }
];
