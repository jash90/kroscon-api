import { BoardGame } from './boardGame.entity';

export const boardGamesProviders = [{ provide: 'BoardGamesRepository', useValue: BoardGame }];
