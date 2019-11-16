import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsDate } from 'class-validator';

export class UpdateLoanGameDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly startLoan: Date;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly endLoan: Date;

}
