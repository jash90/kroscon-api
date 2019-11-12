import { Specialist } from '../../shared/enum/enums';
export declare class CreateDoctorDto {
    readonly numberPwz: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly specialization: Specialist;
}
