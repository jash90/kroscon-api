import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional } from 'class-validator';

export class CreateLoanGameDto {

    @ApiModelProperty()
    @IsDate()
    readonly start: Date;

    @ApiModelProperty()
    @IsOptional()
    @IsDate()
    readonly end: Date;

}
