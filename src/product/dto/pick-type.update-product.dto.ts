import { PartialType } from '@nestjs/mapped-types';
import { PickTypeCreateProductDto } from './pick-type.create-product.dto';

export class PickTypeUpdateProductDto extends PartialType(
  PickTypeCreateProductDto,
) {}
