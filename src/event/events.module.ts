import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecture } from '../lecture/lecture.entity';
import { Event } from './event.entity';
import { EventsController } from './events.controller';
import { eventsProviders } from './events.providers';
import { EventsService } from './events.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Lecture])],
  controllers: [EventsController],
  providers: [eventsProviders, EventsService],
})
export class EventsModule {}
