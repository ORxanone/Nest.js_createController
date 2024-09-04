import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/category-create.dto';
import { CategoryUpdateDto } from './dto/category-updatte.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly ctgService: CategoryService) {}
  @Get()
  async getAll() {
    return await this.ctgService.all();
  }
  @Post()
  async create(@Body() ctg: CategoryCreateDto) {
    return await this.ctgService.create(ctg);
  }

  @Patch(':id')
  async update(@Param('id') ctgId: string, @Body() ctg: CategoryUpdateDto) {
    ctg.id = ctgId;
    return await this.ctgService.update(ctg);
  }

  @Delete(':id')
  async delete(@Param('id') ctgId: string) {
    return this.ctgService.delete(ctgId);
  }
}
