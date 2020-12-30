import {ApiModelProperty} from '@nestjs/swagger';
import {LectureDto} from './lecture.dto';

export class LectureOffset {
  @ApiModelProperty()
  readonly rows: LectureDto[];
  @ApiModelProperty()
  readonly count: number;

  constructor(lectureOffset: LectureOffset) {
    this.rows = lectureOffset.rows;
    this.count = lectureOffset.count;
  }
}
