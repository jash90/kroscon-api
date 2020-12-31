import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Privilege } from './privilege.entity';
import { PrivilegesController } from './privileges.controller';
import { privilegesProviders } from './privileges.providers';
import { PrivilegesService } from './privileges.service';

@Module({
  imports: [TypeOrmModule.forFeature([Privilege, User])],
  controllers: [PrivilegesController],
  providers: [privilegesProviders, PrivilegesService],
})
export class PrivilegesModule {}
