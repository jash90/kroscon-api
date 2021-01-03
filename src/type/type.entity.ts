import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BoardGame } from '../boardGame/boardGame.entity';

@Entity('types')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  name: string;

  @ManyToMany(
    () => BoardGame,
    boardGame => boardGame.types,
  )
  @JoinTable({
    name: "boardGame_type",
    joinColumns: [{ name: "type_id" }],
    inverseJoinColumns: [{ name: "boardGame_id" }]
  })
  boardGames: BoardGame[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
