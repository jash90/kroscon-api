import { ApiModelProperty } from '@nestjs/swagger';
import { Lecture } from '../lecture.entity';

export class LectureDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly start: Date;

    @ApiModelProperty()
    readonly end: Date;

    @ApiModelProperty()
    readonly description: string;


    constructor(lecture: Lecture) {
        this.id = lecture.id;
        this.name = lecture.name;
        this.start = lecture.start;
        this.end = lecture.end;
        this.description = lecture.description;
    }
}