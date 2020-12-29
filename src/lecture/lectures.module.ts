import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { LecturesController } from "./lectures.controller";
import { LecturesService } from "./lectures.service";
import { lecturesProviders } from "./lectures.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [LecturesController],
  providers: [LecturesService],
  exports: []
})
export class LecturesModule {}
