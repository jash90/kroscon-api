import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsDate } from 'class-validator';

export class UpdateLoanGameDto {
    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly start: Date;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly end: Date;

}
