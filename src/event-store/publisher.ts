import { Injectable } from '@nestjs/common';
import { AggregateRoot, IEvent } from '@nestjs/cqrs';
import { EventStoreBus } from './bus';

export interface Constructor<T> {
  new (...args: any[]): T;
}

@Injectable()
export class EventStorePublisher {
  constructor(private readonly eventBus: EventStoreBus) {}

  mergeClassContext<T extends Constructor<AggregateRoot>>(metatype: T): T {
    const eventBus = this.eventBus;
    return class extends metatype {
      publish(event: IEvent) {
        eventBus.publish(event);
      }

      publishAll(events: IEvent[]) {
        eventBus.publishAll(events);
      }
    };
  }

  mergeObjectContext<T extends AggregateRoot>(object: T): T {
    const eventBus = this.eventBus;
    object.publish = (event: IEvent) => {
      eventBus.publish(event);
    };

    object.publishAll = (events: IEvent[]) => {
      eventBus.publishAll(events);
    };
    return object;
  }
}
