import { production } from "./config.json";

export const config = {
  type: "postgres",
  host: production.host,
  port: production.port,
  username: production.username,
  password: production.password,
  database: production.database,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true
};
