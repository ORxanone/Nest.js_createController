import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CategoryCreateDto {
  @IsString()
  @ApiProperty({
    example: 'Phone',
    description: 'Category Description...',
  })
  name: string;
}
