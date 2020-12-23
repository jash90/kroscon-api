import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('mechanics')
export class Mechanic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    // @HasMany(() => BoardGameMechanic)
    // BoardGameMechanics: BoardGameMechanic[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
