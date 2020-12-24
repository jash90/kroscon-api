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
import { Gender } from "../shared/enum/enums";
import { Privilege } from "../privilege/privilege.entity";
import { Reservation } from "src/reservation/reservation.entity";
import { LoanGame } from "src/loanGame/loanGame.entity";
import { Feedback } from "src/feedback/feedback.entity";
import { Publisher } from "../publisher/publisher.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  email: string;

  @Column("text")
  password: string;

  @Column("text")
  firstname: string;

  @Column("text")
  lastname: string;

  @Column("text")
  gender: Gender;

  @Column("date")
  birthday: string;

  @ManyToOne(() => Privilege, privilege => privilege.users)
  @JoinColumn({ name: "privilege_id" })
  privilege: Privilege;

  @OneToMany(() => LoanGame, loanGame => loanGame.user)
  loanGames: LoanGame[];

  @OneToMany(() => LoanGame, loanGame => loanGame.hireUser)
  hireGames: LoanGame[];

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservations: Reservation[];

  @OneToMany(() => Feedback, feedback => feedback.user)
  feedbacks: Feedback[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
