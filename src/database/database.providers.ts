import {createConnection} from 'typeorm';
import {ConfigService} from '../shared/config/config.service';

export const databaseProviders = [
  {
    provide: 'DatabaseConnection',
    useFactory: async (configService: ConfigService) => {
      await createConnection(configService.connectionConfig);
    },
    inject: [ConfigService],
  },
];
