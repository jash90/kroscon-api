import {ApiModelProperty} from '@nestjs/swagger';
import {IsEmail, IsNumber, IsOptional, IsString, Max, Min, MinLength} from 'class-validator';

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
  readonly firstname: string;

  @ApiModelProperty()
  @IsString()
  readonly lastname: string;

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
  @IsNumber()
  readonly privilegeId: number;
}
