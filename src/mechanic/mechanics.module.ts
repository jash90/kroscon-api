import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Mechanic } from './mechanic.entity';
import { MechanicsController } from './mechanics.controller';
import { mechanicsProviders } from './mechanics.providers';
import { MechanicsService } from './mechanics.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardGame, Mechanic])],
  controllers: [MechanicsController],
  providers: [mechanicsProviders, MechanicsService],
})
export class MechanicsModule {}
