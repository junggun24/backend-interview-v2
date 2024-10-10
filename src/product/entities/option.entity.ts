import {
  BaseEntity,
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { ProductEntity } from './product.entity';

@Index('pk_id', ['id'], { unique: true })
@Unique(['productId', 'ea'])
@Entity('option', { schema: 'public' })
export class OptionEntity extends BaseEntity {
  @Expose()
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Expose()
  @Column('integer', { name: 'product_id', nullable: false })
  productId: number;

  @Expose()
  @Column('integer', { name: 'price' })
  price: number;

  @Expose()
  @Column('integer', { name: 'size' })
  size: number;

  @Expose()
  @Column('integer', { name: 'color' })
  color: number;

  @Expose()
  @Column('integer', { name: 'ea' })
  ea: number;

  @ManyToOne((type) => ProductEntity, (object) => object.options)
  product: ProductEntity;
}
