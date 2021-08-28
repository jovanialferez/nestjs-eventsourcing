import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventStoreModule } from 'src/event-store/event-store.module';
import { PingHandler } from './ping.handler';
import { UserController } from './user.controller';

@Module({
  imports: [CqrsModule, EventStoreModule],
  controllers: [UserController],
  providers: [PingHandler],
})
export class UserModule {}
