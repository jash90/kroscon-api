import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { TableController } from "./table.controller";
import { TableService } from "./table.service";
import { tableProviders } from "./table.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [TableController],
    providers: [TableService, ...tableProviders],
    exports: [],
})
export class TableModule { }
