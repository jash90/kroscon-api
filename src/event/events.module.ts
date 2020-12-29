import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { EventsController } from "./events.controller";
import { EventsService } from "./events.service";
import { eventsProviders } from "./events.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [EventsController],
  providers: [EventsService],
  exports: []
})
export class EventsModule {}
