import { PartialType } from '@nestjs/swagger';
import { BasePaginationDto } from '../../common/dto/base-pagination.dto';
import { IsBoolean } from 'class-validator';
import { StringToBoolean } from '../../common/transformer/string-to-boolean';

export class ProductPaginationDto extends PartialType(BasePaginationDto) {
  @StringToBoolean()
  @IsBoolean()
  state: boolean;
}
