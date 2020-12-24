import { User } from "src/users/user.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("privileges")
export class Privilege {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @OneToMany(() => User, user => user.privilege)
  users: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
