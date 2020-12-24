import { ApiModelProperty } from "@nestjs/swagger";
import { Event } from "../event.entity";
import { Lecture } from "src/lecture/lecture.entity";

export class EventDto {
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

  @ApiModelProperty()
  readonly location: string;

  @ApiModelProperty()
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
