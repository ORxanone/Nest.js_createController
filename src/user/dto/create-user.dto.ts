import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsAdult } from './user.validation';

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

  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    example: '1994-08-26 00:00:00',
  })
  @IsAdult({ message: 'You must be over 18 to register' })
  birthDay: Date;
}
