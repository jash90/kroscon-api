import {
  Check,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Feedback } from '../feedback/feedback.entity';
import { LoanGame } from '../loanGame/loanGame.entity';
import { Mechanic } from '../mechanic/mechanic.entity';
import { Publisher } from '../publisher/publisher.entity';
import { Reservation } from '../reservation/reservation.entity';
import { Type } from '../type/type.entity';

@Entity('boardGames')
@Check(`min_players > 0`)
@Check(`max_players > 1`)
@Check(`min_age > 1 AND min_age < 99`)
export class BoardGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'text', unique: true })
  uuid: string;

  @Column({ type: 'smallint', name: 'min_players' })
  minPlayers: number;

  @Column({ type: 'smallint', name: 'max_players' })
  maxPlayers: number;

  @Column({ type: 'smallint', name: 'playing_time' })
  playingTime: number;

  @Column({ type: 'smallint', name: 'min_age' })
  minAge: number;

  @ManyToMany(() => Mechanic, (mechanic) => mechanic.boardGames)
  @JoinTable({
    name: 'boardGame_mechanic',
    joinColumns: [{ name: 'boardGame_id' }],
    inverseJoinColumns: [{ name: 'mechanic_id' }],
  })
  mechanics: Mechanic[];

  @ManyToMany(() => Type, (type) => type.boardGames)
  @JoinTable({
    name: 'boardGame_type',
    joinColumns: [{ name: 'boardGame_id' }],
    inverseJoinColumns: [{ name: 'type_id' }],
  })
  types: Type[];

  @OneToMany(() => LoanGame, (loanGame) => loanGame.boardGame)
  loanGames: LoanGame[];

  @OneToMany(() => Reservation, (reservation) => reservation.boardGame)
  reservations: Reservation[];

  @OneToMany(() => Feedback, (feedback) => feedback.boardGame)
  feedbacks: Feedback[];

  @ManyToOne(() => Publisher, (publisher) => publisher.boardGames)
  @JoinColumn({ name: 'publisher_id' })
  publisher: Publisher;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
