import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Feedback } from '../feedback/feedback.entity';
import { Table } from '../table/table.entity';
import { User } from '../users/user.entity';

@Entity('loanGames')
export class LoanGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  start: Date;

  @Column({ type: 'date', nullable: true })
  end: Date;

  @ManyToOne(() => User, (user) => user.hireGames)
  @JoinColumn({ name: 'hireUser_id' })
  hireUser: User;

  @ManyToOne(() => User, (user) => user.loanGames)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Table, (table) => table.loanGames)
  @JoinColumn({ name: 'table_id' })
  table: Table;

  @ManyToOne(() => BoardGame, (boardGame) => boardGame.loanGames)
  @JoinColumn({ name: 'boardGame_id' })
  boardGame: BoardGame;

  @OneToMany(() => Feedback, (feedback) => feedback.loanGame)
  feedbacks: Feedback[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
