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
import { BoardGameMechanic } from '../boardGameMechanic/boardGameMechanic.entity';

@Table({
    tableName: 'mechanic',
})
export class Mechanic extends Model<Mechanic> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.TEXT)
    name: string;

    @HasMany(() => BoardGameMechanic)
    BoardGameMechanics: BoardGameMechanic[];

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
