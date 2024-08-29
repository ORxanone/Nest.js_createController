import { MainBaseEntity } from 'src/entities/main.base.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product extends MainBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
