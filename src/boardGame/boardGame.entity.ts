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
import { User } from 'src/users/user.entity';
import { BoardGameMechanic } from '../boardGameMechanic/boardGameMechanic.entity';
import { Publisher } from 'src/publisher/publisher.entity';
import { Mechanic } from 'src/mechanic/mechanic.entity';
import { BoardGameType } from 'src/boardGameType/boardGameType.entity';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { Feedback } from 'src/feedback/feedback.entity';
import { Table as Tab } from 'src/table/table.entity';

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

    @Column(DataType.TEXT)
    @Unique(true)
    uuid: string;
    
    @Column(DataType.NUMBER)
    @Min(1)
    minPlayers: number;

    @Column(DataType.NUMBER)
    @Min(2)
    maxPlayers: number;

    @Column(DataType.NUMBER)
    @Min(1)
    playingTime: number;

    @Column(DataType.NUMBER)
    @Min(1)
    @Max(99)
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
