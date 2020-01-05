import { Type } from './type.entity';

export const typesProviders = [{ provide: 'TypesRepository', useValue: Type }];
