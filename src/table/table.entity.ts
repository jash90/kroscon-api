import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LoanGame } from '../loanGame/loanGame.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity('tables')
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  name: string;

  @OneToMany(
    () => Reservation,
    reservation => reservation.table,
  )
  reservations: Reservation[];

  @OneToMany(
    () => LoanGame,
    loanGame => loanGame.table,
  )
  loanGames: LoanGame[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
