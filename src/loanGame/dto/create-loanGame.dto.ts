import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsNumber } from 'class-validator';

export class CreateLoanGameDto {

    @ApiModelProperty()
    @IsDate()
    readonly start: Date;

    @ApiModelProperty()
    @IsOptional()
    @IsDate()
    readonly end: Date;

    @ApiModelProperty()
    @IsNumber()
    readonly userId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly boardGameId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly tableId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly hireUserId: number;

}
