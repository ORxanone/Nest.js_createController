import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { User } from 'src/user/entities/user.entity';
import { isDefined } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all() {
    return this.productRepository.find({
      where: {},
      relations: ['user', 'category'],
      order: {
        createdAt: 'DESC',
      },
    });
  }
  async byUserId(userId: string) {
    return await this.productRepository.find({
      where: { user: { id: userId } },
    });
  }

  async byProductId(productId: string) {
    const res = await this.productRepository.findOne({
      where: { id: productId },
    });

    return res;
  }

  async byCategoryId(catId: string) {
    const res = await this.productRepository.find({
      where: { categoryId: catId },
      relations: ['user'],
      order: {
        createdAt: 'DESC',
      },
    });
    return res;
  }

  async createProduct(product: CreateProductDto) {
    console.log('product: ', product);

    const newProduct = new Product();
    newProduct.name = product.name;
    newProduct.user = new User();
    newProduct.user.id = product.userId;
    newProduct.category = new Category();
    newProduct.category.id = product.categoryId;
    const result = await this.productRepository.save(newProduct);
    console.log(result);
    return result;
  }

  async updateProduct(product: UpdateProductDto) {
    const exitProduct = await this.productRepository.findOne({
      where: { id: product.id },
    });

    // 1- st Solution

    // if (exitProduct) {
    //   exitProduct.name = product.name;
    // } else {
    //   throw new Error('No such a Product');
    // }

    // 2- nd Solutions (with iDefined fc class-validator )

    if (isDefined(exitProduct)) {
      exitProduct.name = product.name;
      return this.productRepository.save(exitProduct);
    } else {
      throw new Error('No such a Product');
    }
  }

  async deleteProduct(productId: string) {
    return await this.productRepository.softDelete(productId);
  }
}
