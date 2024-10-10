import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './repositories/product.repository';
import { ProductOptionRepository } from './repositories/product.option.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ProductOptionRepository],
})
export class ProductModule {}
