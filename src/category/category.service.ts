import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryCreateDto } from './dto/category-create.dto';
import { CategoryUpdateDto } from './dto/category-updatte.dto';
import { isDefined } from 'class-validator';
import { CategoryNotFoundException } from 'src/common/exceptions/category.notFound.exeption';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly ctgRepo: Repository<Category>,
  ) {}

  async all() {
    return await this.ctgRepo.find();
  }

  async create(category: CategoryCreateDto) {
    const newCatg = this.ctgRepo.create();
    newCatg.name = category.name;
    const res = await this.ctgRepo.save(newCatg);
    return { message: 'Success', data: res };
  }

  async update(ctg: CategoryUpdateDto) {
    const exitCtg = await this.ctgRepo.findOne({
      where: { id: ctg.id },
    });

    if (isDefined(exitCtg)) {
      exitCtg.name = ctg.name;
      return await this.ctgRepo.save(exitCtg);
    } else {
      throw new CategoryNotFoundException(ctg.id);
    }
  }

  async delete(ctgId: string) {
    return await this.ctgRepo.softDelete(ctgId);
  }
}
