import { Connection } from 'typeorm';
import { Feedback } from './feedback.entity';

export const feedbacksProviders = {
  provide: 'FeedbacksRepository',
  useFactory: (connection: Connection) => connection.getRepository(Feedback),
  inject: [Connection],
};
