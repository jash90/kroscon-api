import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "../users/user.entity";
import { BoardGame } from "../boardGame/boardGame.entity";
import { Table } from "../table/table.entity";
import { Feedback } from "../feedback/feedback.entity";
import { Publisher } from "../publisher/publisher.entity";

@Entity("loanGames")
export class LoanGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  start: Date;

  @Column("date")
  end: Date;

  @ManyToOne(() => User, user => user.hireGames)
  @JoinColumn({ name: "hireUser_id" })
  hireUser: User;

  @ManyToOne(() => User, user => user.loanGames)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Table, table => table.loanGames)
  @JoinColumn({ name: "table_id" })
  table: Table;

  @ManyToOne(() => BoardGame, boardGame => boardGame.loanGames)
  @JoinColumn({ name: "boardGame_id" })
  boardGame: BoardGame;

  @OneToMany(() => Feedback, feedback => feedback.loanGame)
  feedbacks: Feedback[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
