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
import { Event } from '../event/event.entity';

@Entity('lectures')
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('date')
  start: Date;

  @Column('date')
  end: Date;

  @Column('text')
  description: string;

  @ManyToOne(
    () => Event,
    event => event.lectures,
  )
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
