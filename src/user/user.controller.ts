import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly useService: UserService) {}

  @Get()
  activeUsers() {
    return this.useService.activeUsers();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreateUserDto,
  })
  createUser(@Body() user: CreateUserDto) {
    return this.useService.createUser(user);
  }

  @Put(':id')
  update(@Param('id') userId: string, @Body() user: UpdateUserDto) {
    user.id = userId;
    return this.useService.updateUser(user);
  }

  @Delete(':id')
  delete(@Param('id') userId: string) {
    return this.useService.delete(userId);
  }
}
