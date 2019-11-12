import { Model } from 'sequelize-typescript';
import { Doctor } from '../doctors/doctor.entity';
export declare class Schedule extends Model<Schedule> {
    id: number;
    doctorId: number;
    dayOfWeek: number;
    hourOpen: string;
    hourClose: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    doctor: Doctor;
}
