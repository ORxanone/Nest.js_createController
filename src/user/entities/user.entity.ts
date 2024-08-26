import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @Column()
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
