import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { IMessage } from '../messages/constants/messages.interface';
import { messages } from './chat.store';
import { BadRequestException } from '@nestjs/common';

const port = Number(process.env.SOCKET_PORT) || 8001;

@WebSocketGateway(port, { cors: '*' })
export class ChatGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: IMessage,
  ): void {
    try {
      this.server.emit('message', message);
      messages.push(message);
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
