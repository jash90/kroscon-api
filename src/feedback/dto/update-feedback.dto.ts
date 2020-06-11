import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, Min, Max, IsUUID } from 'class-validator';

export class UpdateFeedbackDto {
    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(10)
    rating: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    userId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    loanGameId: number;
}
