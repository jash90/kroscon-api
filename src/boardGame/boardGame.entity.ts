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
    Min,
    Max,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { BoardGameMechanic } from '../boardGameMechanic/boardGameMechanic.entity';
import { Publisher } from '../publisher/publisher.entity';
import { Mechanic } from '../mechanic/mechanic.entity';
import { BoardGameType } from '../boardGameType/boardGameType.entity';
import { LoanGame } from '../loanGame/loanGame.entity';
import { Reservation } from '../reservation/reservation.entity';
import { Feedback } from '../feedback/feedback.entity';
import { Table as Tab } from '../table/table.entity';

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


    @Unique(true)
    @Column(DataType.TEXT)
    uuid: string;

    @Min(1)
    @Column(DataType.INTEGER)
    minPlayers: number;


    @Min(2)
    @Column(DataType.INTEGER)
    maxPlayers: number;

    @Min(1)
    @Column(DataType.INTEGER)
    playingTime: number;


    @Min(1)
    @Max(99)
    @Column(DataType.INTEGER)
    minAge: number;

    @HasMany(() => BoardGameMechanic)
    boardGameMechanics: BoardGameMechanic[];

    @HasMany(() => BoardGameType)
    boardGameTypes: BoardGameType[];

    @HasMany(() => LoanGame)
    loanGames: LoanGame[];

    @HasMany(() => Reservation)
    reservations: Reservation[];

    @HasMany(() => Feedback)
    feedbacks: Feedback[];

    @HasMany(() => Tab)
    tables: Tab[];

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
