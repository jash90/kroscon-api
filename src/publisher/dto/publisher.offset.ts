import {ApiModelProperty} from '@nestjs/swagger';
import {PublisherDto} from './publisher.dto';

export class PublisherOffset {
  @ApiModelProperty()
  readonly rows: PublisherDto[];
  @ApiModelProperty()
  readonly count: number;

  constructor(publisherOffset: PublisherOffset) {
    this.rows = publisherOffset.rows;
    this.count = publisherOffset.count;
  }
}
