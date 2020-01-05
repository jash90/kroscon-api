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
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { Type } from 'src/type/type.entity';

@Table({
    tableName: 'boardGameType',
})
export class BoardGameType extends Model<BoardGameType> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => BoardGame)
    @Column({ type: DataType.BIGINT, field: 'boardGame_id' })
    boardGameId: number;

    @BelongsTo(() => BoardGame)
    boardGame: BoardGame;

    @ForeignKey(() => Type)
    @Column({ type: DataType.BIGINT, field: 'type_id' })
    typeId: number;

    @BelongsTo(() => Type)
    type: Type;

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
