import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { LoanGamesController } from './loanGames.controller';
import { LoanGamesService } from './loanGames.service';
import { loanGamesProviders } from './loanGames.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [LoanGamesController],
    providers: [LoanGamesService, ...loanGamesProviders],
    exports: [],
})
export class LoanGamesModule { }
