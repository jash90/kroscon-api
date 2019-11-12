import { Schedule } from './schedule.entity';
import { Doctor } from '../doctors/doctor.entity';
export declare const schedulesProviders: ({
    provide: string;
    useValue: typeof Schedule;
} | {
    provide: string;
    useValue: typeof Doctor;
})[];
