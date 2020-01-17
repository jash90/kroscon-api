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
    Min,
    Max, BelongsTo, ForeignKey
} from 'sequelize-typescript';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { User } from 'src/users/user.entity';
import { BoardGame } from 'src/boardGame/boardGame.entity';

@Table({
    tableName: 'feedback',
})
export class Feedback extends Model<Feedback> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Min(1)
    @Max(10)
    @Column(DataType.INTEGER)
    rating: number;

    @ForeignKey(() => LoanGame)
    @Column({ type: DataType.BIGINT, field: 'loanGame_id' })
    loanGameId: number;

    @BelongsTo(() => LoanGame)
    loanGame: LoanGame;

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
