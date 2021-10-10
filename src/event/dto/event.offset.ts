import { ApiProperty } from '@nestjs/swagger';
import { EventDto } from './event.dto';

export class EventOffset {
  @ApiProperty()
  readonly rows: EventDto[];
  @ApiProperty()
  readonly count: number;

  constructor(eventOffset: EventOffset) {
    this.rows = eventOffset.rows;
    this.count = eventOffset.count;
  }
}
