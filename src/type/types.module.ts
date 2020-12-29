import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { TypesController } from "./types.controller";
import { TypesService } from "./types.service";
import { typesProviders } from "./types.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [TypesController],
  providers: [TypesService],
  exports: []
})
export class TypesModule {}
