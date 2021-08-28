import { AggregateRoot } from '@nestjs/cqrs';
import { PingEvent } from './ping.event';

export class User extends AggregateRoot {
  constructor() {
    super();
  }

  ping() {
    this.apply(new PingEvent(`${Date.now()}`));
  }
}
