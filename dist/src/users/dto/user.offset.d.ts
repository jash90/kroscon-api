import { UserDto } from './user.dto';
export declare class UserOffset {
    readonly rows: UserDto[];
    readonly count: number;
    constructor(userOffset: UserOffset);
}
