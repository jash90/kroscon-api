import { Model } from 'sequelize-typescript';
import { Gender } from '../shared/enum/enums';
export declare class User extends Model<User> {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    birthday: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
