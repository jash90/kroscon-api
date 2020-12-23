import {User} from 'src/users/user.entity';
import {Publisher} from 'src/publisher/publisher.entity';
import {Mechanic} from 'src/mechanic/mechanic.entity';
import {LoanGame} from 'src/loanGame/loanGame.entity';
import {Reservation} from 'src/reservation/reservation.entity';
import {Feedback} from 'src/feedback/feedback.entity';
import {Table as Tab} from 'src/table/table.entity';
import {Check, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('boardGames')
@Check(`"minPlayer" > 0`)
@Check(`"maxPlayer" > 1`)
@Check(`"minAge" > 1 AND "minAge" < 99`)
export class BoardGame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text', unique: true})
    name: string;

    @Column({type: 'text', unique: true})
    uuid: string;

    @Column('integer')
    minPlayers: number;

    @Column('integer')
    maxPlayers: number;

    @Column('smallint')
    playingTime: number;

    @Column('smallint')
    minAge: number;

    // @HasMany(() => BoardGameMechanic)
    // boardGameMechanics: BoardGameMechanic[];
    //
    // @HasMany(() => BoardGameType)
    // boardGameTypes: BoardGameType[];
    //
    // @HasMany(() => LoanGame)
    // loanGames: LoanGame[];
    //
    // @HasMany(() => Reservation)
    // reservations: Reservation[];
    //
    // @HasMany(() => Feedback)
    // feedbacks: Feedback[];
    //
    // @ForeignKey(() => Publisher)
    // @Column({ type: DataType.BIGINT })
    // publisherId: number;
    //
    // @BelongsTo(() => Publisher)
    // publisher: Publisher;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
