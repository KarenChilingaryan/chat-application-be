import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
    imports: [],
    controllers: [MessagesController],
    providers: [MessagesService],
    exports: [MessagesService],
})

export class MessagesModule { }
