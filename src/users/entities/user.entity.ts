import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Expose } from 'class-transformer';

@Index('pk_id', ['id'], { unique: true })
@Unique(['email'])
@Entity('users', { schema: 'public' })
export class UserEntity extends BaseEntity {
  @Expose()
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Expose()
  @Column('character varying', { name: 'email', length: 50 })
  email: string;

  @Column('character varying', { name: 'password', length: 60 })
  password: string | null;

  @Expose()
  @Column('character varying', { name: 'name', length: 20 })
  name: string;

  @Expose()
  @Column('character varying', { name: 'nickname', length: 30 })
  nickname: string;

  @Expose()
  @Column('integer', { name: 'age' })
  age: number;
}
