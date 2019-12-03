import { UserDto } from './user.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../user.entity';
import {Roles} from '../../shared/enum/enums';

export class UserLoginResponseDto extends UserDto {
    @ApiModelProperty()
    token: string;

    @ApiModelProperty()
    role: Roles;

    constructor(user: User, token?: string) {
        super(user);
        this.token = token;
        this.role = user.role;
    }
}
