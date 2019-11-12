import { Visit } from './visit.entity';
import { Schedule } from '../schedules/schedule.entity';
import { Doctor } from '../doctors/doctor.entity';
import { Pantient } from '../pantients/pantient.entity';
export declare const visitsProviders: ({
    provide: string;
    useValue: typeof Visit;
} | {
    provide: string;
    useValue: typeof Schedule;
} | {
    provide: string;
    useValue: typeof Doctor;
} | {
    provide: string;
    useValue: typeof Pantient;
})[];
