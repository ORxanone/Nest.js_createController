import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all() {
    return await this.productRepository.find();
  }

  async createProduct(product: CreateProductDto) {
    console.log('product: ', product);

    const newProduct = new Product();
    newProduct.name = product.name;
    newProduct.user = new User();
    newProduct.user.id = product.userId;
    const result = await this.productRepository.save(newProduct);
    console.log(result);
    return result;
  }

  async updateProduct(product: UpdateProductDto) {
    const exitProduct = await this.productRepository.findOne({
      where: { id: product.id },
    });

    if (exitProduct) {
      exitProduct.name = product.name;
    } else {
      throw new Error('No such a Product');
    }

    return await this.productRepository.save(exitProduct);
  }

  async deleteProduct(productId: string) {
    return await this.productRepository.softDelete(productId);
  }
}
