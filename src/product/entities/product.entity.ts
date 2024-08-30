import { MainBaseEntity } from 'src/entities/main.base.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Product extends MainBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}
