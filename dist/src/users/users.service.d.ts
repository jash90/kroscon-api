import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from './../shared/config/config.service';
import { UserOffset } from './dto/user.offset';
export declare class UsersService {
    private readonly usersRepository;
    private readonly configService;
    private readonly jwtPrivateKey;
    constructor(usersRepository: typeof User, configService: ConfigService);
    findAll(): Promise<UserDto[]>;
    getUser(id: string): Promise<UserDto>;
    getUserByEmail(email: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<UserLoginResponseDto>;
    login(userLoginRequestDto: UserLoginRequestDto): Promise<UserLoginResponseDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto>;
    delete(id: string): Promise<UserDto>;
    signToken(user: User): Promise<string>;
    offset(index?: number): Promise<UserOffset>;
}
