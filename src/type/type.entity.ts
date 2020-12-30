import {Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {BoardGame} from '../boardGame/boardGame.entity';

@Entity('types')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @ManyToMany(
    () => BoardGame,
    boardGame => boardGame.types,
  )
  boardGames: BoardGame[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
