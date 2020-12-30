import {Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {BoardGame} from '../boardGame/boardGame.entity';

@Entity('mechanics')
export class Mechanic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @ManyToMany(
    () => BoardGame,
    boardGame => boardGame.mechanics,
  )
  boardGames: BoardGame[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
