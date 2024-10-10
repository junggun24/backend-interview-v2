import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { PickTypeCreateProductDto } from '../dto/pick-type.create-product.dto';
import { PickTypeUpdateProductDto } from '../dto/pick-type.update-product.dto';
import { ProductPaginationDto } from '../dto/product-pagination.dto';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  // private logger = new ApplicationConsoleLogger(CountryRepository.name);

  constructor(private readonly dataSource: DataSource) {
    super(ProductEntity, dataSource.createEntityManager());
  }

  async ormCreateProduct(
    createProductDto: PickTypeCreateProductDto,
  ): Promise<void> {
    await this.createQueryBuilder()
      .insert()
      .into(ProductEntity)
      .values(createProductDto)
      .execute();
  }

  async ormFindOneById(id: number) {
    return this.createQueryBuilder('product')
      .leftJoinAndSelect('product.options', 'options')
      .where('product.id = :id', { id })
      .getOne();
  }

  async ormUpdateProduct(
    productId: number,
    updateProductData: PickTypeUpdateProductDto,
  ) {
    await this.createQueryBuilder()
      .update(ProductEntity)
      .set(updateProductData)
      .where('id = :productId', { productId })
      .execute();
  }

  ormFindAll(pagination: ProductPaginationDto) {
    const { state, sortBy, orderBy, searchKey, searchValue, skip, take } =
      pagination;
    const productQb = this.createQueryBuilder('product')
      .where('state = :state', { state })
      .leftJoinAndSelect('product.options', 'options')
      .limit(take)
      .offset(skip);

    if (searchKey === 'name' && searchValue) {
      productQb.andWhere(`product.${searchKey} ILIKE :searchValue`, {
        searchValue: `%${searchValue}%`,
      });
    }
    if (searchKey === 'brandId' && searchValue) {
      productQb.andWhere(`product.${searchKey} = :searchValue`, {
        searchValue: `${searchValue}`,
      });
    }
    if (searchKey === 'color' && searchValue) {
      productQb.andWhere(`options.${searchKey} = :searchValue`, {
        searchValue: `${searchValue}`,
      });
    }
    if (orderBy && sortBy) {
      let table;
      //TODO Array to Enum
      const product = ['name', 'accSales', 'likeCount'];
      const options = ['price'];
      if (product.includes(orderBy)) {
        table = 'product';
      } else if (options.includes(orderBy)) {
        table = 'options';
      }
      if (table) {
        productQb.orderBy(`${table}.${orderBy}`, sortBy, 'NULLS LAST');
      }
    }

    return productQb.getManyAndCount();
  }

  ormIncreaseProductLike(productId: number, userId: number) {
    this.createQueryBuilder('')
      .update(ProductEntity)
      .where('id = :productId', { productId })
      .set({ likeCount: () => 'likeCount + 1' })
      .execute();
  }

  ormDecreaseProductLike(productId: number, userId: number) {
    this.createQueryBuilder('')
      .update(ProductEntity)
      .where('id = :productId', { productId })
      .set({ likeCount: () => 'likeCount - 1' })
      .execute();
  }
}
