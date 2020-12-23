
import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { LoanGame } from '../loanGame/loanGame.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity('tables')

export class Table {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    // @HasMany(() => Reservation)
    // reservations: Reservation[];
    //
    // @HasMany(() => LoanGame)
    // loanGames: LoanGame[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
