
import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { Gender } from '../shared/enum/enums';
import { Privilege } from '../privilege/privilege.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { Feedback } from 'src/feedback/feedback.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text')
    password: string;

    @Column('text')
    firstname: string;

    @Column('text')
    lastname: string;

    @Column('text')
    gender: Gender;

    @Column('date')
    birthday: string;

    // @ForeignKey(() => Privilege)
    // @Column({ type: DataType.BIGINT })
    // privilegeId: number;
    //
    // @BelongsTo(() => Privilege)
    // privilege: Privilege;
    //
    // @HasMany(() => Reservation)
    // reservations: Reservation[];
    //
    // @HasMany(() => LoanGame)
    // loanGames: LoanGame[];
    //
    // @HasMany(() => Feedback)
    // feedbacks: Feedback[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
