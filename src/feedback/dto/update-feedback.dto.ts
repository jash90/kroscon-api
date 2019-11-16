import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, Min, Max } from 'class-validator';

export class UpdateFeedbackDto {
    @IsOptional()
    @ApiModelProperty()
    @IsNumber()
    @Min(1)
    @Max(10)
    readonly rating: number;
}
