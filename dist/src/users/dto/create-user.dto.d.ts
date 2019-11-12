import { Gender } from '../../shared/enum/enums';
export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: Gender;
    readonly birthday: string;
}
