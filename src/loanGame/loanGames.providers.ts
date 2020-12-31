import { Connection } from 'typeorm';
import { LoanGame } from './loanGame.entity';

export const loanGamesProviders = {
  provide: 'LoanGamesRepository',
  useFactory: (connection: Connection) => connection.getRepository(LoanGame),
  inject: [Connection],
};
