import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrivilegesController } from "./privileges.controller";
import { PrivilegesService } from "./privileges.service";
import { Privilege } from './privilege.entity';
import { User } from '../users/user.entity';
import { privilegesProviders } from './privileges.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Privilege, User])],
  controllers: [PrivilegesController],
  providers: [privilegesProviders, PrivilegesService]
})
export class PrivilegesModule { }
