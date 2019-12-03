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
} from 'sequelize-typescript';
import { User } from 'src/users/user.entity';
import { Lecture } from 'src/lecture/lecture.entity';

@Table({
    tableName: 'events',
})
export class Event extends Model<Event> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.TEXT)
    name: string;

    @HasMany(() => Lecture)
    lectures: Lecture[];

    @Column(DataType.DATE)
    start: Date;

    @Column(DataType.DATE)
    end: Date;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.TEXT)
    location: string;

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt: Date;

}
