import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { ReservationsController } from "./reservations.controller";
import { ReservationsService } from "./reservations.service";
import { reservationsProviders } from "./reservations.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports: []
})
export class ReservationsModule {}
