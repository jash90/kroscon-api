import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Table } from '../table/table.entity';
import { User } from '../users/user.entity';

@Entity('reservations')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  time: Date;

  @ManyToOne(
    () => User,
    user => user.reservations,
  )
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(
    () => BoardGame,
    boardGame => boardGame.reservations,
  )
  @JoinColumn({ name: 'boardGame_id' })
  boardGame: BoardGame;

  @ManyToOne(
    () => Table,
    table => table.reservations,
  )
  @JoinColumn({ name: 'table_id' })
  table: Table;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
