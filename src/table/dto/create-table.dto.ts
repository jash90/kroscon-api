import {ApiModelProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateTableDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;
}
