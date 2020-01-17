import {
    AutoIncrement, BelongsTo,
    Column,
    CreatedAt,
    DataType,
    DeletedAt, ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from 'sequelize-typescript';

import { User } from '../users/user.entity';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Table as Tab } from '../table/table.entity';
@Table({
    tableName: 'reservation',
})
export class Reservation extends Model<Reservation> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.DATE)
    time: Date;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, field: 'user_id' })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => BoardGame)
    @Column({ type: DataType.BIGINT, field: 'boardGame_id' })
    boardGameId: number;

    @BelongsTo(() => BoardGame)
    boardGame: BoardGame;

    @ForeignKey(() => Tab)
    @Column({ type: DataType.BIGINT, field: 'table_id' })
    tableId: number;

    @BelongsTo(() => Tab)
    table: Tab;

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
