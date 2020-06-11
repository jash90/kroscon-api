import { Column, CreatedAt, DataType, DeletedAt, IsEmail, Model, Table, Unique, UpdatedAt, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { Gender } from '../shared/enum/enums';
import { Privilege } from '../privilege/privilege.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { Feedback } from 'src/feedback/feedback.entity';

@Table({
    tableName: 'users',
})
export class User extends Model<User> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUID,
        primaryKey: true,
    })
    id: string;

    @Unique(true)
    @Column({ type: DataType.TEXT, validate: { IsEmail: true } })
    email: string;

    @Column(DataType.TEXT)
    password: string;

    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column({ type: DataType.ENUM(Object.keys(Gender)) })
    gender: Gender;

    @Column(DataType.DATEONLY)
    birthday: string;

    @ForeignKey(() => Privilege)
    @Column({ type: DataType.BIGINT})
    privilegeId: number;

    @BelongsTo(() => Privilege)
    privilege: Privilege;

    @HasMany(() => Reservation)
    reservations: Reservation[];

    @HasMany(() => LoanGame)
    loanGames: LoanGame[];

    @HasMany(() => Feedback)
    feedbacks: Feedback[];

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;

    @DeletedAt
    @Column
    deletedAt: Date;
}
