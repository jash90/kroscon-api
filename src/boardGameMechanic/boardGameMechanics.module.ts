import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { BoardGameMechanicsController } from './boardGameMechanics.controller';
import { BoardGameMechanicsService } from './boardGameMechanics.service';
import { boardGameMechanicsProviders } from './boardGameMechanics.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [BoardGameMechanicsController],
    providers: [BoardGameMechanicsService, ...boardGameMechanicsProviders],
    exports: [],
})
export class BoardGameMechanicsModule { }
