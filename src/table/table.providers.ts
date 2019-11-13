import { Table } from './table.entity';

export const tableProviders = [{ provide: 'TablesRepository', useValue: Table }];
