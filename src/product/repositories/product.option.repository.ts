import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { PickTypeCreateProductDto } from '../dto/pick-type.create-product.dto';
import { OptionEntity } from '../entities/option.entity';
import CreateProductOptionDto from '../dto/create-product-option.dto';
import { PickTypeCreateProductOptionDto } from '../dto/pick-type.create-product-option.dto';
import { PickTypeUpdateProductDto } from '../dto/pick-type.update-product.dto';
import { PickTypeUpdateProductOptionDto } from '../dto/pick-type.update-product-option.dto';

@Injectable()
export class ProductOptionRepository extends Repository<OptionEntity> {
  // private logger = new ApplicationConsoleLogger(CountryRepository.name);

  constructor(private readonly dataSource: DataSource) {
    super(OptionEntity, dataSource.createEntityManager());
  }

  async ormCreateProductOption(
    values: PickTypeCreateProductOptionDto[],
  ): Promise<void> {
    await this.createQueryBuilder()
      .insert()
      .into(OptionEntity)
      .values(values)
      .execute();
  }

  async ormUpdateProductOption(
    optionId: number,
    updateProductOptionData: PickTypeUpdateProductOptionDto,
  ) {
    await this.createQueryBuilder()
      .update(OptionEntity)
      .set(updateProductOptionData)
      .where('id = :optionId', { optionId })
      .execute();
  }
}
