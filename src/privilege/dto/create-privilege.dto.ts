import {ApiModelProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreatePrivilegeDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;
}
