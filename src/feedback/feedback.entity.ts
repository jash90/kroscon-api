import {LoanGame} from 'src/loanGame/loanGame.entity';
import {User} from 'src/users/user.entity';
import {BoardGame} from 'src/boardGame/boardGame.entity';
import {Check, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('feedbacks')
@Check(`"rating" > 1 AND "rating" < 10`)
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('integer')
    rating: number;

    // @ForeignKey(() => LoanGame)
    // @Column({type: DataType.BIGINT})
    // loanGameId: number;
    //
    // @BelongsTo(() => LoanGame)
    // loanGame: LoanGame;
    //
    // @ForeignKey(() => User)
    // @Column({type: DataType.BIGINT})
    // userId: number;
    //
    // @BelongsTo(() => User)
    // user: User;
    //
    // @ForeignKey(() => BoardGame)
    // @Column({type: DataType.BIGINT})
    // boardGameId: number;
    //
    // @BelongsTo(() => BoardGame)
    // boardGame: BoardGame;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
