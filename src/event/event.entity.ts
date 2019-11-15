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

@Table({
    tableName: 'event',
})
export class Event extends Model<Event> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.TEXT)
    name: string;

    @HasMany(() => User)
    users: User[];

    @Column(DataType.Date)
    start: Date;


    @Column(DataType.Date)
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
