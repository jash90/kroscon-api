import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMechanicDto {
  @IsOptional()
  @ApiModelProperty()
  @IsString()
  name: string;
}
