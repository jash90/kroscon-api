import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { BoardGameTypesController } from './boardGameTypes.controller';
import { BoardGameTypesService } from './boardGameTypes.service';
import { boardGameTypesProviders } from './boardGameTypes.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [BoardGameTypesController],
    providers: [BoardGameTypesService, ...boardGameTypesProviders],
    exports: [],
})
export class BoardGameTypesModule { }
