import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PingHandler } from './ping.handler';
import { UserController } from './user.controller';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [PingHandler],
})
export class UserModule {}
