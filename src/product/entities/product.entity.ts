import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { OptionEntity } from './option.entity';

@Index('pk_id', ['id'], { unique: true })
@Unique(['name'])
@Entity('product', { schema: 'public' })
export class ProductEntity extends BaseEntity {
  @Expose()
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Expose()
  @Column('character varying', { name: 'name', length: 50 })
  name: string;

  @Expose()
  @Column('character varying', { name: 'description' })
  description: string | null;

  @Expose()
  @Column('integer', { name: 'brand_id' })
  brandId: number;

  @Expose()
  @Column('integer', { name: 'acc_sales' })
  accSales: number;

  @Expose()
  @Column('integer', { name: 'like_count' })
  likeCount: number;

  @OneToMany((type) => OptionEntity, (object) => object.product)
  options: OptionEntity[];
}
