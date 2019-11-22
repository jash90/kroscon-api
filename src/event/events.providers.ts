import { Event } from './event.entity';

export const eventsProviders = [{ provide: 'EventsRepository', useValue: Event }];
