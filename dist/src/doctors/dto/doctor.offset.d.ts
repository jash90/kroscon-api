import { DoctorDto } from './doctor.dto';
export declare class DoctorOffset {
    readonly rows: DoctorDto[];
    readonly count: number;
    constructor(doctorOffset: DoctorOffset);
}
