import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsDate, IsNumber } from 'class-validator';

export class UpdateLoanGameDto {
    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly start: Date;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly end: Date;

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
    readonly tableId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly hireUserId: number;

}
