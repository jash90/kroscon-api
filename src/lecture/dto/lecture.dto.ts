import { ApiProperty } from '@nestjs/swagger';
import { Lecture } from '../lecture.entity';

export class LectureDto {
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

  constructor(lecture: Lecture) {
    this.id = lecture.id;
    this.name = lecture.name;
    this.start = lecture.start;
    this.end = lecture.end;
    this.description = lecture.description;
  }
}
