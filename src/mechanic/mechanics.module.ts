import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { MechanicsController } from './mechanics.controller';
import { MechanicsService } from './mechanics.service';
import { mechanicsProviders } from './mechanics.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [MechanicsController],
    providers: [MechanicsService, ...mechanicsProviders],
    exports: [],
})
export class MechanicsModule { }
