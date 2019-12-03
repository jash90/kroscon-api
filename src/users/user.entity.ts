import { Column, CreatedAt, DataType, DeletedAt, IsEmail, Model, Table, Unique, UpdatedAt, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import {Gender, Roles} from '../shared/enum/enums';
import { Reservation } from 'src/reservation/reservation.entity';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { Feedback } from 'src/feedback/feedback.entity';

@Table({
    tableName: 'users',
})
export class User extends Model<User> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Unique(true)
    @Column({ type: DataType.TEXT, validate: { IsEmail: true } })
    email: string;

    @Column(DataType.TEXT)
    password: string;

    @Column({ field: 'first_name' })
    firstname: string;

    @Column({ field: 'last_name' })
    lastname: string;

    @Column({ type: DataType.ENUM(Object.keys(Gender)) })
    gender: Gender;

    @Column(DataType.DATEONLY)
    birthday: string;

    @Column({ type: DataType.ENUM(Object.keys(Roles)) })
    role: Roles;

    @HasMany(() => Reservation)
    reservations: Reservation[];

    @HasMany(() => LoanGame)
    loanGames: LoanGame[];

    @HasMany(() => Feedback)
    feedbacks: Feedback[];

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt: Date;
}
