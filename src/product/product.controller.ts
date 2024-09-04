import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
@ApiTags('Products')
export class ProductController {
  constructor(readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: 'Active Products' })
  async activeProduts() {
    return await this.productService.all();
  }

  @Get('byUserId/:userId')
  @ApiOperation({ summary: `Active User's Product` })
  async getByUserId(@Param('userId') userId: string) {
    return await this.productService.byUserId(userId);
  }

  @Get(':productId')
  @ApiOperation({ summary: 'Product Detail' })
  async getByProductId(@Param('productId') productId: string) {
    return this.productService.byProductId(productId);
  }

  @Get(':catId')
  @ApiOperation({ summary: 'Product Category Detail' })
  async getbyCategoryId(@Param('catId') catId: string) {
    return this.productService.byCategoryId(catId);
  }

  @Post()
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body() product: UpdateProductDto,
  ) {
    product.id = productId;
    return this.productService.updateProduct(product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') productId: string) {
    return this.productService.deleteProduct(productId);
  }
}
