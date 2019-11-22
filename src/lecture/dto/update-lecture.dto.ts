import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length, IsDate } from 'class-validator';

export class UpdateLectureDto {

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly name: string;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly start: Date;

    @ApiModelProperty()
    @IsDate()
    @IsOptional()
    readonly end:Date;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly description: string;
}
