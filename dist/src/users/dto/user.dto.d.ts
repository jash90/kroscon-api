import { User } from '../user.entity';
import { Gender } from '../../shared/enum/enums';
export declare class UserDto {
    id: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: Gender;
    readonly birthday: string;
    constructor(user: User);
}
