import { Specialist } from '../../shared/enum/enums';
import { Doctor } from '../doctor.entity';
export declare class DoctorDto {
    readonly id: number;
    readonly numberPwz: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly specialization: Specialist;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(doctor: Doctor);
}
