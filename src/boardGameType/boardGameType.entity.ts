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
} from 'sequelize-typescript';

@Table({
    tableName: 'boardGameType',
})
export class BoardGameType extends Model<BoardGameType> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column(DataType.TEXT)
    name: string;


    // @HasMany(() => User)
    // users: User[];

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
