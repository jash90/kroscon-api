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
    Table as Tabela,
    Unique,
    UpdatedAt,
} from 'sequelize-typescript';
import { LoanGame } from '../loanGame/loanGame.entity';
import { Reservation } from '../reservation/reservation.entity';

@Tabela({
    tableName: 'tables',
})

export class Table extends Model<Table> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;
    @Column(DataType.TEXT)
    name: string;

    @HasMany(() => Reservation)
    reservations: Reservation[];

    @HasMany(() => LoanGame)
    loanGames: LoanGame[];

    @CreatedAt
    @Column({ field: 'createdAt' })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: 'updatedAt' })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: 'deletedAt' })
    deletedAt: Date;

}
