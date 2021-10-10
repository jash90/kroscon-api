// import { Gender } from "../../shared/enum/enums";
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  firstname?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastname?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(99)
  readonly age?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  privilegeId?: number;
}
