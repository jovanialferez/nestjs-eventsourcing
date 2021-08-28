import { Controller, Post } from '@nestjs/common';
import { EventStorePublisher } from 'src/event-store';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private publisher: EventStorePublisher) {}

  @Post('ping')
  async ping() {
    const user = this.publisher.mergeObjectContext(new User());
    user.ping();
    user.commit();
    return 'pong!';
  }
}
