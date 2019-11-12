import { UserDto } from './user.dto';
import { User } from '../user.entity';
export declare class UserLoginResponseDto extends UserDto {
    token: string;
    constructor(user: User, token?: string);
}
