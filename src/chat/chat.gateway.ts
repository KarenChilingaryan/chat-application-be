import { Logger } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server: Server;

  private logger = new Logger('ChatGateway'); // Create a logger instance

  @SubscribeMessage('message')
  handleMessage(
    client: any,
    payload: { sender: string; message: string },
  ): void {
    this.logger.log('Received message:'); // Log a message
    this.logger.log(payload); // Log the payload

    this.server.emit('message', payload);
  }
}
