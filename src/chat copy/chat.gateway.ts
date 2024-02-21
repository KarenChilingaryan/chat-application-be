import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

export const messages = [];

interface Message {
  userId: string;
  message: string;
  timestamp: string;
}

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
