import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class UpdateMechanicDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    name: string;
}
