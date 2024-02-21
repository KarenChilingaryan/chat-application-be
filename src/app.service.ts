import { Injectable } from '@nestjs/common';
import { messages } from './chat/chat.gateway';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
 
  getMessages(): any {
    return messages;
  }
}
