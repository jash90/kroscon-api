
import {DataType} from 'sequelize-typescript';
import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { User } from '../users/user.entity';
import { BoardGame } from '../boardGame/boardGame.entity';
import { Table as Tab } from '../table/table.entity';

@Entity('loanGames')
export class LoanGame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    start: Date;

    @Column('date')
    end: Date;

    // @ForeignKey(() => User)
    // @Column({ type: DataType.BIGINT })
    // userId: number;
    //
    // @BelongsTo(() => User)
    // user: User;
    //
    // @ForeignKey(() => BoardGame)
    // @Column({ type: DataType.BIGINT })
    // boardGameId: number;
    //
    // @BelongsTo(() => BoardGame)
    // boardGame: BoardGame;
    //
    // @ForeignKey(() => Tab)
    // @Column({ type: DataType.BIGINT })
    // tableId: number;
    //
    // @BelongsTo(() => Tab)
    // table: Tab;
    //
    // @ForeignKey(() => User)
    // @Column({ type: DataType.BIGINT })
    // hireUserId: number;
    //
    // @BelongsTo(() => User)
    // hireUser: User;

   @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
