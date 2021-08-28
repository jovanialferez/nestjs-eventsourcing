import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventStoreBus } from './bus';
import { EventStorePublisher } from './publisher';

@Module({
  imports: [CqrsModule],
  providers: [EventStorePublisher, EventStoreBus],
  exports: [EventStorePublisher, EventStoreBus],
})
export class EventStoreModule {}
