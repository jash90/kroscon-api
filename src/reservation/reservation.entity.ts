import {
    AutoIncrement, BelongsTo,
    Column,
    CreatedAt,
    DataType,
    DeletedAt, ForeignKey,
    HasMany,
    Length,
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
    tableName: 'reservations',
})
export class Reservation extends Model<Reservation> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.DATE)
    time: Date;

    @ForeignKey(() => User)
    @Column({ type: DataType.BIGINT })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => BoardGame)
    @Column({ type: DataType.BIGINT })
    boardGameId: number;

    @BelongsTo(() => BoardGame)
    boardGame: BoardGame;

    @ForeignKey(() => Tab)
    @Column({ type: DataType.BIGINT })
    tableId: number;

    @BelongsTo(() => Tab)
    table: Tab;

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
