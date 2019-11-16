import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, Max} from 'class-validator';

export class CreateFeedbackDto {

    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(10)
    readonly rating: number;

}
