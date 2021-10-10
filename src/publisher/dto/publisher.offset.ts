import { ApiProperty } from '@nestjs/swagger';
import { PublisherDto } from './publisher.dto';

export class PublisherOffset {
  @ApiProperty()
  readonly rows: PublisherDto[];
  @ApiProperty()
  readonly count: number;

  constructor(publisherOffset: PublisherOffset) {
    this.rows = publisherOffset.rows;
    this.count = publisherOffset.count;
  }
}
