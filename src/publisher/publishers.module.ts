import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BoardGame} from '../boardGame/boardGame.entity';
import {Publisher} from './publisher.entity';
import {PublishersController} from './publishers.controller';
import {publishersProviders} from './publishers.providers';
import {PublishersService} from './publishers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher, BoardGame])],
  controllers: [PublishersController],
  providers: [publishersProviders, PublishersService],
})
export class PublishersModule {}
