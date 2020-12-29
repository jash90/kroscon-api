import { Module } from "@nestjs/common";
import { MechanicsController } from "./mechanics.controller";
import { MechanicsService } from "./mechanics.service";
import { Mechanic } from './mechanic.entity';
import { BoardGame } from '../boardGame/boardGame.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { mechanicsProviders } from './mechanics.providers';

@Module({
  imports: [TypeOrmModule.forFeature([BoardGame, Mechanic])],
  controllers: [MechanicsController],
  providers: [mechanicsProviders, MechanicsService],
})
export class MechanicsModule { }
