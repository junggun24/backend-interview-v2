import { PartialType } from '@nestjs/mapped-types';
import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';
import { ProductEntity } from '../entities/product.entity';

export class PickTypeCreateProductDto extends PartialType(
  PickType(ProductEntity, ['name', 'description', 'brandId'] as const),
) {}
