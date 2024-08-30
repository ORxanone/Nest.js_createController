import { MainBaseEntity } from 'src/entities/main.base.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends MainBaseEntity {
  @Column()
  email: string;

  @Column({ nullable: true })
  birthDay!: Date;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}
