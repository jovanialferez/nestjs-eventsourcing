import { IEvent, IEventBus } from '@nestjs/cqrs';

export class EventStoreBus implements IEventBus {
  publish<T extends IEvent>(event: T): void {
    console.group('EventoStoreBuss::publish');
    console.log(event);
    console.groupEnd();
  }

  publishAll(events: IEvent[]): void {
    console.group('EventoStoreBuss::publishAll');
    console.log(events);
    console.groupEnd();
  }
}
