import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PingEvent } from './ping.event';

@EventsHandler(PingEvent)
export class PingHandler implements IEventHandler<PingEvent> {
  handle(event: PingEvent) {
    console.log('Got PingEvent! :: ', event.id);
  }
}
