import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { PrivilegesModule } from './privilege/privileges.module';
@Module({
    imports: [UsersModule, SharedModule, PrivilegesModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
