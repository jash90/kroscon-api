import {
    Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import { Event } from '../event/event.entity';

@Entity( 'lectures')
export class Lecture {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('date')
    start: Date;

    @Column('date')
    end: Date;

    @Column('string')
    description: string;

    // @ForeignKey(() => Event)
    // @Column({ type: DataType.BIGINT })
    // eventId: number;
    //
    // @BelongsTo(() => Event)
    // event: Event;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
