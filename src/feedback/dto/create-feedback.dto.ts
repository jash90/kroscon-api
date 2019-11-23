import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, Max} from 'class-validator';

export class CreateFeedbackDto {

    @ApiModelProperty()
    @IsNumber()
    readonly userId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly loanGameId: number;

    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(10)
    readonly rating: number;

}
