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
import { User } from 'src/users/user.entity';
import { BoardGameMechanic } from '../boardGameMechanic/boardGameMechanic.entity';
import { Publisher } from 'src/publisher/publisher.entity';
import { Mechanic } from 'src/mechanic/mechanic.entity';
import { BoardGameType } from 'src/boardGameType/boardGameType.entity';

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
    boardGameMechanics: BoardGameMechanic[];

    @HasMany(() => BoardGameType)
    boardGameTypes: BoardGameType[];

    @ForeignKey(() => Publisher)
    @Column({ type: DataType.BIGINT, field: 'publisher_id' })
    publisherId: number;

    @BelongsTo(() => Publisher)
    publisher: Publisher;

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
