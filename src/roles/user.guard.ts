import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import {Roles} from '../shared/enum/enums';

@Injectable()
export class UserGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.role === Roles.USER;
    return user && user.role && hasRole();
  }
}
