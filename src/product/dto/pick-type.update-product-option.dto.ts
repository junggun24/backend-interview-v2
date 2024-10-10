import { PartialType } from '@nestjs/mapped-types';
import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';
import { ProductEntity } from '../entities/product.entity';
import { OptionEntity } from '../entities/option.entity';
import { PickTypeCreateProductOptionDto } from './pick-type.create-product-option.dto';

export class PickTypeUpdateProductOptionDto extends PartialType(
  PickTypeCreateProductOptionDto,
) {}
