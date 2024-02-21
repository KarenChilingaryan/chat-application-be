import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server } from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Use the Socket.io adapter with your app
  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(4200);

  // Create a separate Socket.io server
  const io = new Server({
    cors: {
      origin: 'http://localhost:3000',
    },
  });

  // Attach the Socket.io server to your Nest.js app
  app.useWebSocketAdapter(new IoAdapter(io));

  io.listen(4000);
}

bootstrap();