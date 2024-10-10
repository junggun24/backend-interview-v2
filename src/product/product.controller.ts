import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import CreateProductDto from './dto/create-product.dto';
import CreateProductOptionDto from './dto/create-product-option.dto';
import { UpdateProductOptionDto } from './dto/update-product-option.dto';
import { ProductPaginationDto } from './dto/product-pagination.dto';
import { AuthGuard } from '@nestjs/passport';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query() aaa: number, @Query() pagination: ProductPaginationDto) {
    return this.productService.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(+id, updateProductDto);
  }

  @Patch(':id/like')
  @UseGuards(AuthGuard('jwt'))
  like(
    @Param('id', ParseIntPipe) id: number,

    @Req() req: any,
  ) {
    return this.productService.likeProduct(+id, req.user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Post('option')
  createOption(@Body() createProductOptionDto: CreateProductOptionDto) {
    return this.productService.createOption(createProductOptionDto);
  }

  @Patch('option/:id')
  updateOption(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductOptionDto,
  ) {
    return this.productService.updateOption(+id, updateProductDto);
  }
}
