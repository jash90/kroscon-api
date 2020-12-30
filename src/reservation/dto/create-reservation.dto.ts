import {ApiModelProperty} from '@nestjs/swagger';
import {IsDate, IsNumber} from 'class-validator';

export class CreateReservationDto {
  @ApiModelProperty()
  @IsNumber()
  readonly userId: number;

  @ApiModelProperty()
  @IsNumber()
  readonly boardGameId: number;

  @ApiModelProperty()
  @IsNumber()
  readonly tableId: number;

  @ApiModelProperty()
  @IsDate()
  readonly time: Date;
}
