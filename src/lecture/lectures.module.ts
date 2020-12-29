import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LecturesController } from "./lectures.controller";
import { LecturesService } from "./lectures.service";
import { Event } from "../event/event.entity";
import { Lecture } from './lecture.entity';
import { lecturesProviders } from './lectures.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Lecture])],
  controllers: [LecturesController],
  providers: [lecturesProviders, LecturesService],
})
export class LecturesModule { }
