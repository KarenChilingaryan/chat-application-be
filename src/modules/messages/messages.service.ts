import { Injectable } from '@nestjs/common';
import { messages } from 'src/modules/chat/chat.store';
import { IMessage } from './constants/messages.interface';

@Injectable()
export class MessagesService {
    constructor() { }

    async findAll(): Promise<Array<IMessage>> {
        return messages;
    }
}
