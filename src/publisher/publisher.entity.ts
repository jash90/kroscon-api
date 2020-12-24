import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { BoardGame } from "../boardGame/boardGame.entity";

@Entity("publishers")
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @ManyToOne(() => BoardGame, publisher => publisher.publisher)
  boardGames: BoardGame[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
