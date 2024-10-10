import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, Validate } from 'class-validator';
import { IsNumberArrayConstraint } from '../../custom-validator/product-option.decorator';
import { Type } from 'class-transformer';

export default class CreateProductOptionDto {
  @IsNotEmpty()
  @IsArray()
  @Validate(IsNumberArrayConstraint)
  options: Array<number[]>;

  @IsNotEmpty()
  @Type(() => Number)
  productId: number;
}
