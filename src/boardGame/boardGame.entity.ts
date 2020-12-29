import { Publisher } from "../publisher/publisher.entity";
import { Mechanic } from "../mechanic/mechanic.entity";
import { LoanGame } from "../loanGame/loanGame.entity";
import { Reservation } from "../reservation/reservation.entity";
import { Feedback } from "../feedback/feedback.entity";
import { Type } from "../type/type.entity";
import {
  Check,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("boardGames")
@Check(`min_players > 0`)
@Check(`max_players > 1`)
@Check(`min_age > 1 AND min_age < 99`)
export class BoardGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  name: string;

  @Column({ type: "text", unique: true })
  uuid: string;

  @Column({ type: "smallint", name: "min_players" })
  minPlayers: number;

  @Column({ type: "smallint", name: "max_players" })
  maxPlayers: number;

  @Column({ type: "smallint", name: "playing_time" })
  playingTime: number;

  @Column({ type: "smallint", name: "min_age" })
  minAge: number;

  @ManyToMany(() => Mechanic, mechanic => mechanic.boardGames)
  mechanics: Mechanic[];

  @ManyToMany(() => Type, type => type.boardGames)
  types: Type[];

  @OneToMany(() => LoanGame, loanGame => loanGame.boardGame)
  loanGames: LoanGame[];

  @OneToMany(() => Reservation, reservation => reservation.boardGame)
  reservations: Reservation[];

  @OneToMany(() => Feedback, feedback => feedback.boardGame)
  feedbacks: Feedback[];

  @ManyToOne(() => Publisher, publisher => publisher.boardGames)
  @JoinColumn({ name: "publisher_id" })
  publisher: Publisher;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
