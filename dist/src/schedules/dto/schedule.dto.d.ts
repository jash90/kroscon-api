import { Schedule } from '../schedule.entity';
export declare class ScheduleDto {
    readonly id: number;
    readonly doctorId: number;
    readonly doctorFirstName: string;
    readonly doctorLastName: string;
    readonly dayOfWeek: number;
    readonly hourOpen: string;
    readonly hourClose: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(schedule: Schedule);
}
