import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('publishers')
export class Publisher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    // @HasMany(() => BoardGame)
    // boardGames: BoardGame[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
