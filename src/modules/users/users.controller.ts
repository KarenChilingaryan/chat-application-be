import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './constants/users.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getAll(
    ): Promise<Array<User>> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async getUser(
        @Param('id')
        id: string,
    ): Promise<Array<User>> {
        return this.usersService.findOneAll(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(
        @Body()
        user: CreateUserDto,
    ): Promise<User> {
        return this.usersService.create(user);
    }
}
