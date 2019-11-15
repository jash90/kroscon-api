import { ApiModelProperty } from '@nestjs/swagger';
import { Event } from '../event.entity';

export class EventDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    constructor(event: Event) {
        this.id = event.id;
        this.name = event.name;
    }
}