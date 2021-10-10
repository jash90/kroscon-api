import { ApiProperty } from '@nestjs/swagger';
import { Lecture } from '../../lecture/lecture.entity';
import { Event } from '../event.entity';

export class EventDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly start: Date;

  @ApiProperty()
  readonly end: Date;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly location: string;

  @ApiProperty()
  readonly lectures: Lecture[];

  constructor(event: Event) {
    this.id = event.id;
    this.name = event.name;
    this.start = event.start;
    this.end = event.end;
    this.description = event.description;
    this.location = event.location;
    this.lectures = event.lectures;
  }
}
