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
import { Mechanic } from '../mechanic/mechanic.entity';

@Table({
    tableName: 'boardGameMechanics',
})
export class BoardGameMechanic extends Model<BoardGameMechanic> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => BoardGame)
    @Column({ type: DataType.BIGINT })
    boardGameId: number;

    @BelongsTo(() => BoardGame)
    boardGame: BoardGame;

    @ForeignKey(() => Mechanic)
    @Column({ type: DataType.BIGINT })
    mechanicId: number;

    @BelongsTo(() => Mechanic)
    mechanic: Mechanic;

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
