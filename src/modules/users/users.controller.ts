import {
    Controller,
    Get,
    Post,
    Body,
    Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './constants/users.interface';

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
    async create(
        @Body()
        user: User,
    ): Promise<User> {
        return this.usersService.create(user);
    }
}
