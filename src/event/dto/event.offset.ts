import { ApiModelProperty } from '@nestjs/swagger';
import { EventDto } from '../../event/dto/event.dto';

export class EventOffset {
    @ApiModelProperty()
    readonly rows: EventDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(eventOffset: EventOffset) {
        this.rows = eventOffset.rows;
        this.count = eventOffset.count;
    }
}
