import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Message } from './types';

export const messages = [];

@WebSocketGateway(8001, { cors: '*' })
export class ChatGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: Message,
  ): void {
    messages.push(message);
    this.server.emit('message', message);
  }
}
