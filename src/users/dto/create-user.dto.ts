import {
    IsString,
    IsEmail,
    IsEnum,
    IsISO8601,
    IsOptional,
    MinLength,
    IsNumber,
    Min,
    Max,
} from 'class-validator';
import { Gender } from '../../shared/enum/enums';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty()
    @IsString()
    @MinLength(6)
    readonly password: string;

    @ApiModelProperty()
    @IsString()
    readonly firstName: string;

    @ApiModelProperty()
    @IsString()
    readonly lastName: string;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly city: string;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(99)
    readonly age: number;

    @ApiModelProperty()
    @IsOptional()
    @IsEnum(Gender)
    readonly gender: Gender;

    @ApiModelProperty()
    @IsOptional()
    @IsISO8601()
    readonly birthday: string;

    @ApiModelProperty()
    @IsNumber()
    readonly privilegeId:number;
}
