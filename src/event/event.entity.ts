import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Lecture } from '../lecture/lecture.entity';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @OneToMany(
    () => Lecture,
    lecture => lecture.event,
  )
  lectures: Lecture[];

  @Column('date')
  start: Date;

  @Column('date')
  end: Date;

  @Column('text')
  description: string;

  @Column('text')
  location: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
