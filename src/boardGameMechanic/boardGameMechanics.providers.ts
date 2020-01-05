import { BoardGameMechanic } from './boardGameMechanic.entity';

export const boardGameMechanicsProviders = [{ provide: 'BoardGameMechanicsRepository', useValue: BoardGameMechanic }];
