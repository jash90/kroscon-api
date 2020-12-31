import { Connection } from 'typeorm';
import { Table } from './table.entity';

export const tablesProviders = {
  provide: 'TablesRepository',
  useFactory: (connection: Connection) => connection.getRepository(Table),
  inject: [Connection],
};
