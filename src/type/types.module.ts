import { Module } from "@nestjs/common";
import { TypesController } from "./types.controller";
import { TypesService } from "./types.service";
import { Type } from './type.entity';
import { BoardGame } from '../boardGame/boardGame.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typesProviders } from './types.providers';

@Module({
  imports: [TypeOrmModule.forFeature([BoardGame, Type])],
  controllers: [TypesController],
  providers: [typesProviders,TypesService]
})
export class TypesModule { }
