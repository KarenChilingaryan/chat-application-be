import {
    Controller,
    Get,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { IMessage } from './constants/messages.interface';

@Controller('messages')
export class MessagesController {
    constructor(private usersService: MessagesService) { }

    @Get()
    async getAll(
    ): Promise<Array<IMessage>> {
        return this.usersService.findAll();
    }
}
