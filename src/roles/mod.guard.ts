import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import {Roles} from '../shared/enum/enums';

@Injectable()
export class ModGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.role < Roles.ADMIN;
    return user && user.role && hasRole();
  }
}
