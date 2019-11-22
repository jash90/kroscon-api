import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsDate } from 'class-validator';

export class UpdateEventDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly start: Date;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly end: Date;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly description: string;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly location: string;
}
