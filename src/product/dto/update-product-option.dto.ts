import { PartialType } from '@nestjs/swagger';
import CreateProductDto from './create-product.dto';
import CreateProductOptionDto from './create-product-option.dto';

export class UpdateProductOptionDto extends PartialType(
  CreateProductOptionDto,
) {}
