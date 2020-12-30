import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Event} from '../event/event.entity';
import {Lecture} from './lecture.entity';
import {LecturesController} from './lectures.controller';
import {lecturesProviders} from './lectures.providers';
import {LecturesService} from './lectures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Lecture])],
  controllers: [LecturesController],
  providers: [lecturesProviders, LecturesService],
})
export class LecturesModule {}
