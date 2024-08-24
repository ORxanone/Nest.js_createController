import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly useService: UserService){}

    @Get()
    activeUsers(){
        return this.useService.activeUsers();
    }

    @Post()
    createUser(@Body() user: CreateUserDto){
        console.log("User COntrollerrr:");
        
        return this.useService.createUser(user);
    }

}
