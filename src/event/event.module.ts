import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { EventsController } from './event.controller';
import { EventsService } from './event.service';
import { eventsProviders } from './event.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [EventsController],
    providers: [EventsService, ...eventsProviders],
    exports: [],
})
export class EventssModule { }
