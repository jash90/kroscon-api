import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { BoardGamesController } from './boardGames.controller';
import { BoardGamesService } from './boardGames.service';
import { boardGamesProviders } from './boardGames.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [BoardGamesController],
    providers: [BoardGamesService, ...boardGamesProviders],
    exports: [],
})
export class BoardGamesModule { }
