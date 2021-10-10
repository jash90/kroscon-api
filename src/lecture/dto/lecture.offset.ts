import { ApiProperty } from '@nestjs/swagger';
import { LectureDto } from './lecture.dto';

export class LectureOffset {
  @ApiProperty()
  readonly rows: LectureDto[];
  @ApiProperty()
  readonly count: number;

  constructor(lectureOffset: LectureOffset) {
    this.rows = lectureOffset.rows;
    this.count = lectureOffset.count;
  }
}
