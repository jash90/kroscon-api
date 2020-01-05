import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, Min, Max } from 'class-validator';

export class UpdateFeedbackDto {
    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(10)
    readonly rating: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly userId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly loanGameId: number;
}
