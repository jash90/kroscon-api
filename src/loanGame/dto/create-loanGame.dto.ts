import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional } from 'class-validator';

export class CreateLoanGameDto {

    @ApiModelProperty()
    @IsDate()
    readonly startLoan: Date;

    @ApiModelProperty()
    @IsOptional()
    @IsDate()
    readonly endLoan: Date;

}
