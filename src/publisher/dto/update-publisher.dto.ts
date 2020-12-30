import {ApiModelProperty} from '@nestjs/swagger';
import {IsOptional, IsString} from 'class-validator';

export class UpdatePublisherDto {
  @IsOptional()
  @ApiModelProperty()
  @IsString()
  name: string;
}
