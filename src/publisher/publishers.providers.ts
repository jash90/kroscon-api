import { Publisher } from './publisher.entity';

export const publishersProviders = [{ provide: 'PublishersRepository', useValue: Publisher }];
