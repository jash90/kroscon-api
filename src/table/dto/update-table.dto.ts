import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class UpdateTableDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    name: string;
}
