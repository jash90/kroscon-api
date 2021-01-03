// import { Gender } from "../../shared/enum/enums";
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateUserDto {
  @ApiModelProperty()
  @IsOptional()
  @IsString()
  firstname?: string;

  @ApiModelProperty()
  @IsOptional()
  @IsString()
  lastname?: string;

  @ApiModelProperty()
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(99)
  readonly age?: number;

  @ApiModelProperty()
  @IsNumber()
  @IsOptional()
  privilegeId?: number;
}
