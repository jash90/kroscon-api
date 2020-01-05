import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class UpdateTypeDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    readonly name: string;
}
