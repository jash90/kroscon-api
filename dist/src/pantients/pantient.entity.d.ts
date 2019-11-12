import { Model } from 'sequelize-typescript';
import { Visit } from '../visits/visit.entity';
export declare class Pantient extends Model<Pantient> {
    id: number;
    firstName: string;
    lastName: string;
    postcode: string;
    street: string;
    city: string;
    phone: string;
    pesel: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    visits: Visit[];
}
