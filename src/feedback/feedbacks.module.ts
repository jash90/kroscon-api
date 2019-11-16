import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';
import { feedbacksProviders } from './feedbacks.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [FeedbacksController],
    providers: [FeedbacksService, ...feedbacksProviders],
    exports: [],
})
export class FeedbacksModule { }
