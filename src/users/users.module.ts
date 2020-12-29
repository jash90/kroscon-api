import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { usersProviders } from "./users.providers";
import { DatabaseModule } from "../database/database.module";
import { UsersService } from "./users.service";
import { JwtStrategy } from "./auth/jwt-strategy";
import { UsersAuthController } from "./users.auth.controller";
import { ConfigService } from "../shared/config/config.service";

@Module({
  imports: [DatabaseModule, ConfigService],
  controllers: [UsersController, UsersAuthController],
  providers: [UsersService, JwtStrategy],
  exports: [UsersService]
})
export class UsersModule {}
