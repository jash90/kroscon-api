import {
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    HasMany,
    Length,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Event } from '../event/event.entity';

@Table({
    tableName: 'lectures',
})
export class Lecture extends Model<Lecture> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.TEXT)
    name: string;

    @Column(DataType.DATE)
    start: Date;

    @Column(DataType.DATE)
    end: Date;

    @Column(DataType.STRING)
    description: string;

    @ForeignKey(() => Event)
    @Column({ type: DataType.BIGINT })
    eventId: number;

    @BelongsTo(() => Event)
    event: Event;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;

    @DeletedAt
    @Column
    deletedAt: Date;

}
