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
    Table as Tabela,
    Unique,
    UpdatedAt,
} from 'sequelize-typescript';

@Tabela({
    tableName: 'table',
})

export class Table extends Model<Table> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;
    @Column(DataType.TEXT)
    name: string;

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
