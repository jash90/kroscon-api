import { LoanGame } from "src/loanGame/loanGame.entity";
import { User } from "src/users/user.entity";
import { BoardGame } from "src/boardGame/boardGame.entity";
import {
  Check,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("feedbacks")
@Check(`"rating" > 1 AND "rating" < 10`)
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer")
  rating: number;

  @ManyToOne(() => LoanGame, loanGame => loanGame.feedbacks)
  @JoinColumn({ name: "loanGame_id" })
  loanGame: LoanGame;

  @ManyToOne(() => User, user => user.feedbacks)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => BoardGame, boardgame => boardgame.feedbacks)
  @JoinColumn({ name: "boardGame_id" })
  boardGame: BoardGame;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
