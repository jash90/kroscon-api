import { ApiModelProperty } from '@nestjs/swagger';
import {IsString, IsNumber, Min, Max, IsUUID} from 'class-validator';

export class CreateFeedbackDto {

    @ApiModelProperty()
    @IsUUID()
    readonly userId: string;

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
