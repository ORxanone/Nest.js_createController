import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    example: 'Apple',
  })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'User Id',
  })
  userId: string;
}

//c9485465-daee-40af-94cf-d636a02264af
