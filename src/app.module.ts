import { Module } from '@nestjs/common';
import { ChatModule } from './modules/chat/chat.module';
import { MessagesModule } from './modules/messages/messages.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ChatModule,
    UsersModule,
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
