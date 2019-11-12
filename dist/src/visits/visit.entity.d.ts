import { Model } from 'sequelize-typescript';
import { Doctor } from '../doctors/doctor.entity';
import { Pantient } from '../pantients/pantient.entity';
export declare class Visit extends Model<Visit> {
    id: number;
    doctorId: number;
    pantientId: number;
    date: Date;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    doctor: Doctor;
    pantient: Pantient;
}
