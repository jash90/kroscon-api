import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { PrivilegesController } from "./privileges.controller";
import { PrivilegesService } from "./privileges.service";
import { privilegesProviders } from "./privileges.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [PrivilegesController],
    providers: [PrivilegesService, ...privilegesProviders],
    exports: [],
})
export class PrivilegesModule { }
