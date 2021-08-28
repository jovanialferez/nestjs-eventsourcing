import { Controller, Post } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private publisher: EventPublisher) {}

  @Post('ping')
  async ping() {
    const user = this.publisher.mergeObjectContext(new User());
    user.ping();
    user.commit();
    return 'pong!';
  }
}
