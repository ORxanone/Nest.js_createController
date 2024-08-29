import { MainBaseEntity } from 'src/entities/main.base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends MainBaseEntity {
  @Column()
  email: string;

  @Column({ nullable: true })
  birthDay!: Date;
}
