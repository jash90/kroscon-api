import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventsController } from "./events.controller";
import { EventsService } from "./events.service";
import { Event } from "./event.entity";
import { Lecture } from '../lecture/lecture.entity';
import { eventsProviders } from './events.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Lecture])],
  controllers: [EventsController],
  providers: [eventsProviders, EventsService]
})
export class EventsModule { }
