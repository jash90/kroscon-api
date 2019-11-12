import { Strategy, VerifiedCallback } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.model';
import { UsersService } from '../users.service';
declare const JwtStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: JwtPayload, done: VerifiedCallback): Promise<void>;
}
export {};
