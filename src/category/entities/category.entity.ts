import { MainBaseEntity } from 'src/entities/main.base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends MainBaseEntity {
  @Column()
  name: string;
}
