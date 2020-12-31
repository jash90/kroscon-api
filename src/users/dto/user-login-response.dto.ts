import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../user.entity';
import { UserDto } from './user.dto';

export class UserLoginResponseDto extends UserDto {
  @ApiModelProperty()
  token: string;

  constructor(user: User, token?: string) {
    super(user);
    this.token = token;
  }
}
