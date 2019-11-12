import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class UpdatePrivilegeDto {
    @IsOptional()
    @ApiModelProperty()
    @IsString()
    readonly name: string;
}