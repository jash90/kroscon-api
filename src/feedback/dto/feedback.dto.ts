import { ApiModelProperty } from '@nestjs/swagger';
import { Feedback } from '../feedback.entity';

export class FeedbackDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly rating: number;

    constructor(feedback: Feedback) {
        this.id = feedback.id;
        this.rating = feedback.rating;
    }
}
