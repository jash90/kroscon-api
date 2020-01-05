import { LoanGame } from './loanGame.entity';

export const loanGamesProviders = [{ provide: 'LoanGamesRepository', useValue: LoanGame }];
