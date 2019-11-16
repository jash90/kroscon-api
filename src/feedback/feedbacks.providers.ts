import { Feedback } from './feedback.entity';

export const feedbacksProviders = [{ provide: 'FeedbacksRepository', useValue: Feedback }];
