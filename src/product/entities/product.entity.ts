import { Category } from 'src/category/entities/category.entity';
import { MainBaseEntity } from 'src/entities/main.base.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Product extends MainBaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @ManyToOne(() => Category, { nullable: true })
  category?: Category;

  // there was no need because it was created Automatically
  @Column()
  categoryId: string;

  @Column()
  userId: string;
}
