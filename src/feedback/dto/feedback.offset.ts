import { ApiModelProperty } from "@nestjs/swagger";
import { FeedbackDto } from "./feedback.dto";

export class FeedbackOffset {
  @ApiModelProperty()
  readonly rows: FeedbackDto[];
  @ApiModelProperty()
  readonly count: number;

  constructor(feedbackOffset: FeedbackOffset) {
    this.rows = feedbackOffset.rows;
    this.count = feedbackOffset.count;
  }
}
