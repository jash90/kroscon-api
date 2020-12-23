
import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('types')
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    // @HasMany(() => BoardGameType)
    // BoardGameTypes: BoardGameType[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
