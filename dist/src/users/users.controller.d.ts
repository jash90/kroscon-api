import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOffset } from './dto/user.offset';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<UserLoginResponseDto>;
    login(userLoginRequestDto: UserLoginRequestDto): Promise<UserLoginResponseDto>;
    findAll(): Promise<UserDto[]>;
    getUser(id: any): Promise<UserDto>;
    update(updateUserDto: UpdateUserDto, request: any): Promise<UserDto>;
    delete(request: any): Promise<UserDto>;
    offset(index?: number): Promise<UserOffset>;
}
