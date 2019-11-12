import { Gender } from '../../shared/enum/enums';
export declare class UpdateUserDto {
    readonly firstName?: string;
    readonly lastName?: string;
    readonly gender?: Gender;
    readonly birthday?: string;
}
