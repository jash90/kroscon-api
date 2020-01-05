import { BoardGameType } from './boardGameType.entity';

export const boardGameTypesProviders = [{ provide: 'BoardGameTypesRepository', useValue: BoardGameType }];
