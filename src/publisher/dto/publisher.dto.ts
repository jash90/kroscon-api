import { ApiModelProperty } from '@nestjs/swagger';
import { Publisher } from '../publisher.entity';

export class PublisherDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    constructor(publisher: Publisher) {
        this.id = publisher.id;
        this.name = publisher.name;
    }
}
