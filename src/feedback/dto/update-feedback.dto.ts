import { ApiModelProperty } from '@nestjs/swagger';
import {IsOptional, IsNumber, Min, Max, IsUUID} from 'class-validator';

export class UpdateFeedbackDto {
    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(10)
    readonly rating: number;

    @ApiModelProperty()
    @IsUUID()
    @IsOptional()
    readonly userId: string;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly loanGameId: number;
}
