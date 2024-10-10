import { PartialType } from '@nestjs/mapped-types';
import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';
import { ProductEntity } from '../entities/product.entity';
import { OptionEntity } from '../entities/option.entity';

export class PickTypeCreateProductOptionDto extends PartialType(
  PickType(OptionEntity, [
    'price',
    'color',
    'size',
    'productId',
    'ea',
  ] as const),
) {}
