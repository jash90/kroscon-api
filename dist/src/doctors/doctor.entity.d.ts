import { Model } from 'sequelize-typescript';
import { Specialist } from '../shared/enum/enums';
import { Schedule } from '../schedules/schedule.entity';
import { Visit } from '../visits/visit.entity';
export declare class Doctor extends Model<Doctor> {
    id: number;
    numberPwz: string;
    firstName: string;
    lastName: string;
    specialization: Specialist;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    schedules: Schedule[];
    visits: Visit[];
}
