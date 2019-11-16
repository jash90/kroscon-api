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
import { BoardGameMechanic } from '../boardGameMechanic/boardGameMechanic.entity';

@Table({
    tableName: 'boardGame',
})
export class BoardGame extends Model<BoardGame> {
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
