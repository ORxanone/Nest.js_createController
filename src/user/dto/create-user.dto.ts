import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Orkhan Racabov',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'recebovorxan3@gmail.com',
  })
  email: string;
}
