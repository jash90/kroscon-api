import { ApiModelProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @ApiModelProperty()
  @IsString()
  name: string;

  @ApiModelProperty()
  @IsDate()
  @IsOptional()
  start: Date;

  @ApiModelProperty()
  @IsDate()
  @IsOptional()
  end: Date;

  @ApiModelProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiModelProperty()
  @IsString()
  @IsOptional()
  location: string;
}
