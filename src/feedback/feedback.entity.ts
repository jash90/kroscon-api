import {
  Check,
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
import { LoanGame } from '../loanGame/loanGame.entity';
import { User } from '../users/user.entity';

@Entity('feedbacks')
@Check(`rating > 1 AND rating < 10`)
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  rating: number;

  @ManyToOne(() => LoanGame, (loanGame) => loanGame.feedbacks)
  @JoinColumn({ name: 'loanGame_id' })
  loanGame: LoanGame;

  @ManyToOne(() => User, (user) => user.feedbacks)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => BoardGame, (boardgame) => boardgame.feedbacks)
  @JoinColumn({ name: 'boardGame_id' })
  boardGame: BoardGame;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
