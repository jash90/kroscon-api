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
    tableName: 'boardGameTypes',
})
export class BoardGameType extends Model<BoardGameType> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => BoardGame)
    @Column({ type: DataType.BIGINT })
    boardGameId: number;

    @BelongsTo(() => BoardGame)
    boardGame: BoardGame;

    @ForeignKey(() => Type)
    @Column({ type: DataType.BIGINT })
    typeId: number;

    @BelongsTo(() => Type)
    type: Type;

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
