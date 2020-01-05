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
    tableName: 'boardGameMechanic',
})
export class BoardGameMechanic extends Model<BoardGameMechanic> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => BoardGame)
    @Column({ type: DataType.BIGINT, field: 'boardGame_id' })
    boardGameId: number;

    @BelongsTo(() => BoardGame)
    boardGame: BoardGame;

    @ForeignKey(() => Mechanic)
    @Column({ type: DataType.BIGINT, field: 'mechanic_id' })
    mechanicId: number;

    @BelongsTo(() => Mechanic)
    mechanic: Mechanic;

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
