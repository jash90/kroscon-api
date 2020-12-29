import { Module } from "@nestjs/common";
import { PublishersController } from "./publishers.controller";
import { PublishersService } from "./publishers.service";
import { BoardGame } from '../boardGame/boardGame.entity';
import { Publisher } from './publisher.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { publishersProviders } from './publishers.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher, BoardGame])],
  controllers: [PublishersController],
  providers: [publishersProviders,PublishersService]
})
export class PublishersModule {}
