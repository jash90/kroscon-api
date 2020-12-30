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
import {Feedback} from '../feedback/feedback.entity';
import {LoanGame} from '../loanGame/loanGame.entity';
// import { Gender } from "../shared/enum/enums";
import {Privilege} from '../privilege/privilege.entity';
import {Reservation} from '../reservation/reservation.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  firstname: string;

  @Column('text')
  lastname: string;

  @Column('smallint')
  age: number;

  @Column('text')
  city: string;

  @ManyToOne(
    () => Privilege,
    privilege => privilege.users,
  )
  @JoinColumn({ name: 'privilege_id' })
  privilege: Privilege;

  @OneToMany(
    () => LoanGame,
    loanGame => loanGame.user,
  )
  loanGames: LoanGame[];

  @OneToMany(
    () => LoanGame,
    loanGame => loanGame.hireUser,
  )
  hireGames: LoanGame[];

  @OneToMany(
    () => Reservation,
    reservation => reservation.user,
  )
  reservations: Reservation[];

  @OneToMany(
    () => Feedback,
    feedback => feedback.user,
  )
  feedbacks: Feedback[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
