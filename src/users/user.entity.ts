import { Column, CreatedAt, DataType, DeletedAt, IsEmail, Model, Table, Unique, UpdatedAt, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { Gender } from '../shared/enum/enums';
import { Privilege } from '../privilege/privilege.entity';
import { Reservation } from '../reservation/reservation.entity';
import { LoanGame } from '../loanGame/loanGame.entity';
import { Feedback } from '../feedback/feedback.entity';

@Table({
    tableName: 'user',
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

    @Column({ type: DataType.ENUM(Gender.female, Gender.male) })
    gender: Gender;

    @Column(DataType.DATEONLY)
    birthday: string;

    @ForeignKey(() => Privilege)
    @Column({ type: DataType.BIGINT, field: 'privilege_id' })
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
    @Column({ field: 'created_at' })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt: Date;
}
