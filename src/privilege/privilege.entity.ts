import { User } from 'src/users/user.entity';
import {Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm';

@Entity('privileges')
export class Privilege {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    // @HasMany(() => User)
    // users: User[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
