import { ApiProperty } from '@nestjs/swagger';
import { FeedbackDto } from './feedback.dto';

export class FeedbackOffset {
  @ApiProperty()
  readonly rows: FeedbackDto[];
  @ApiProperty()
  readonly count: number;

  constructor(feedbackOffset: FeedbackOffset) {
    this.rows = feedbackOffset.rows;
    this.count = feedbackOffset.count;
  }
}
