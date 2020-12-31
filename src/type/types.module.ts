import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Type } from './type.entity';
import { TypesController } from './types.controller';
import { typesProviders } from './types.providers';
import { TypesService } from './types.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardGame, Type])],
  controllers: [TypesController],
  providers: [typesProviders, TypesService],
})
export class TypesModule {}
