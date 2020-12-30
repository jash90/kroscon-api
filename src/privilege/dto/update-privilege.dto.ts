import {ApiModelProperty} from '@nestjs/swagger';
import {IsOptional, IsString} from 'class-validator';

export class UpdatePrivilegeDto {
  @IsOptional()
  @ApiModelProperty()
  @IsString()
  name: string;
}
