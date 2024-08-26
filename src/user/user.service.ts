import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  activeUsers() {
    return [
      { id: 1, name: 'Uzi' },
      { id: 2, name: 'Oz' },
    ];
  }

  async createUser(user?: CreateUserDto) {
    console.log('User Serviceeeess:');
    const newUser = await this.userRepository.create();
    newUser.id = uuidv4();
    newUser.email = user.email;
    newUser.name = user.name;


    this.logger.warm(JSON.stringify(newUser))

    return { message: 'Data Saved', data: newUser };
  }
}
