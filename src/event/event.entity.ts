import { User } from 'src/users/user.entity';
import { Lecture } from 'src/lecture/lecture.entity';
import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    // @HasMany(() => Lecture)
    // lectures: Lecture[];

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
