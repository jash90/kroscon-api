import { createConnection } from "typeorm";
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions";
import { ConfigService } from "../shared/config/config.service";

export const databaseProviders = [
  {
    provide: "DatabaseConnection",
    useFactory: async (configService: ConfigService) => {
      await createConnection(configService.connectionConfig);
    },
    inject: [ConfigService]
  }
];
