import { Connection } from 'typeorm';
import { BoardGame } from './boardGame.entity';

export const boardGamesProviders = {
  provide: 'BoardGamesRepository',
  useFactory: (connection: Connection) => connection.getRepository(BoardGame),
  inject: [Connection],
};
