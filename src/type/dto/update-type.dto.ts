import {ApiModelProperty} from '@nestjs/swagger';
import {IsOptional, IsString} from 'class-validator';

export class UpdateTypeDto {
  @IsOptional()
  @ApiModelProperty()
  @IsString()
  name: string;
}
