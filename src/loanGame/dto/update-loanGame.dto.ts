import { ApiModelProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateLoanGameDto {
  @ApiModelProperty()
  @IsDate()
  @IsOptional()
  start: Date;

  @ApiModelProperty()
  @IsDate()
  @IsOptional()
  end: Date;

  @ApiModelProperty()
  @IsNumber()
  @IsOptional()
  userId: number;

  @ApiModelProperty()
  @IsNumber()
  @IsOptional()
  boardGameId: number;

  @ApiModelProperty()
  @IsNumber()
  @IsOptional()
  tableId: number;

  @ApiModelProperty()
  @IsNumber()
  @IsOptional()
  hireUserId: number;
}
