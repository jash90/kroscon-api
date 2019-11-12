import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { PublishersController } from './publishers.controller';
import { PublishersService } from './publishers.service';
import { publishersProviders } from './publishers.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [PublishersController],
    providers: [PublishersService, ...publishersProviders],
    exports: [],
})
export class PublishersModule { }
