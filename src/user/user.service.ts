import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async activeUsers() {
    return await this.userRepository.find();
  }

  async createUser(user?: CreateUserDto) {
    console.log('User Serviceeeess:', user);
    const newUser = await this.userRepository.create();
    newUser.id = uuidv4();
    newUser.email = user.email;
    newUser.name = user.name;
    newUser.birthDay = user.birthDay;

    await this.userRepository.save(newUser);

    // this.logger.warm(JSON.stringify(newUser));

    return { message: 'Data Saved', data: newUser };
  }
  async updateUser(user?: UpdateUserDto) {
    const exitUser = await this.userRepository.findOne({
      where: { id: user.id },
    });

    if (exitUser) {
      exitUser.email = user.email;
      exitUser.name = user.name;
      exitUser.birthDay = user.birthDay;
    } else {
      throw new Error('No such user ');
    }

    return await this.userRepository.save(exitUser);
  }

  async delete(userId: string) {
    return await this.userRepository.softDelete(userId);
  }
}
