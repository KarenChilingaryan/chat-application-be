import { Injectable } from '@nestjs/common';
import { User } from './constants/users.interface';
const users = [];

@Injectable()
export class UsersService {
    constructor() { }

    async findAll(): Promise<Array<User>> {
        return users;
    }

    async findOneAll(id: string): Promise<Array<User>> {
        return users?.find(user => id === user?.id);
    }

    async create(user: User): Promise<User> {
        users.push(user);
        return user;
    }
}
