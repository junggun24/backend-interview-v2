import { Injectable } from '@nestjs/common';
import CreateProductDto from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/product.repository';
import { plainToInstance } from 'class-transformer';
import { PickTypeUserDto } from '../login/dto/pick-type.user.dto';
import { PickTypeCreateProductDto } from './dto/pick-type.create-product.dto';
import CreateProductOptionDto from './dto/create-product-option.dto';
import { ProductOptionRepository } from './repositories/product.option.repository';
import { of } from 'rxjs';
import { PickTypeCreateProductOptionDto } from './dto/pick-type.create-product-option.dto';
import { PickTypeUpdateProductDto } from './dto/pick-type.update-product.dto';
import { UpdateProductOptionDto } from './dto/update-product-option.dto';
import { PickTypeUpdateProductOptionDto } from './dto/pick-type.update-product-option.dto';
import { ProductPaginationDto } from './dto/product-pagination.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly optionRepository: ProductOptionRepository,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const createProductData = plainToInstance(
      PickTypeCreateProductDto,
      createProductDto,
      {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
      },
    );
    await this.productRepository.ormCreateProduct(createProductData);
    return 'This action adds a new product';
  }

  findAll(pagination: ProductPaginationDto) {
    return this.productRepository.ormFindAll(pagination);
  }

  async findOne(id: number) {
    const product = await this.productRepository.ormFindOneById(id);
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updateProductData = plainToInstance(
      PickTypeUpdateProductDto,
      updateProductDto,
      {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
      },
    );
    await this.productRepository.ormUpdateProduct(id, updateProductData);
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async createOption(createProductOptionDto: CreateProductOptionDto) {
    const options = createProductOptionDto.options;
    const bulkData: PickTypeCreateProductOptionDto[] = [];

    for (let index = 0; index < options.length; index++) {
      bulkData.push(
        plainToInstance(PickTypeCreateProductOptionDto, {
          productId: createProductOptionDto.productId,
          ea: options[index][0],
          price: options[index][1],
          size: options[index][2],
          color: options[index][3],
        }),
      );
    }

    await this.optionRepository.ormCreateProductOption(bulkData);
  }

  async updateOption(id: number, updateProductDto: UpdateProductOptionDto) {
    const options = updateProductDto.options;

    const updateProductOptionData = plainToInstance(
      PickTypeUpdateProductOptionDto,
      {
        productId: updateProductDto.productId,
        ea: options[0][0],
        price: options[0][1],
        size: options[0][2],
        color: options[0][3],
      },
      {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
      },
    );
    await this.optionRepository.ormUpdateProductOption(
      id,
      updateProductOptionData,
    );
    return `This action updates a #${id} product`;
  }

  async likeProduct(productId: number, userId: number) {
    await this.productRepository.ormIncreaseProductLike(productId, userId);
  }
  async unlikeProduct(productId: number, userId: number) {
    await this.productRepository.ormIncreaseProductLike(productId, userId);
  }
}
