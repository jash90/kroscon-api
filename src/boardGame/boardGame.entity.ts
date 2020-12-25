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
@Check(`"minPlayer" > 0`)
@Check(`"maxPlayer" > 1`)
@Check(`"minAge" > 1 AND "minAge" < 99`)
export class BoardGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  name: string;

  @Column({ type: "text", unique: true })
  uuid: string;

  @Column("integer")
  minPlayers: number;

  @Column("integer")
  maxPlayers: number;

  @Column("smallint")
  playingTime: number;

  @Column("smallint")
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
