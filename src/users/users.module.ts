import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from './users.service';
import { JwtStrategy } from './auth/jwt-strategy';
import { UsersAuthController } from './users.auth.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController, UsersAuthController],
    providers: [UsersService, ...usersProviders, JwtStrategy],
    exports: [UsersService],
})
export class UsersModule { }
