import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiProperty()
  @IsString()
  readonly firstname: string;

  @ApiProperty()
  @IsString()
  readonly lastname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly city: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(99)
  readonly age: number;
}
