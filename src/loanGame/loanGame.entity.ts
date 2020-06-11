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
import { User } from '../users/user.entity';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Table as Tab } from '../table/table.entity';

@Table({
    tableName: 'loanGames',
})
export class LoanGame extends Model<LoanGame> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.DATE)
    start: Date;

    @Column(DataType.DATE)
    end: Date;

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

    @ForeignKey(() => User)
    @Column({ type: DataType.BIGINT })
    hireUserId: number;

    @BelongsTo(() => User)
    hireUser: User;

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
