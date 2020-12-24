import { UserLoginRequestDto } from "./dto/user-login-request.dto";
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOkResponse, ApiUseTags } from "@nestjs/swagger";
import { UserLoginResponseDto } from "./dto/user-login-response.dto";

@Controller('')
@ApiUseTags('users')
export class UsersAuthController {
    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    @ApiOkResponse({ type: UserLoginResponseDto })
    register(
        @Body() createUserDto: CreateUserDto,
    ): Promise<UserLoginResponseDto> {
        return this.usersService.create(createUserDto);
    }

    @Post('login')
    @HttpCode(200)
    @ApiOkResponse({ type: UserLoginResponseDto })
    login(
        @Body() userLoginRequestDto: UserLoginRequestDto,
    ): Promise<UserLoginResponseDto> {
        return this.usersService.login(userLoginRequestDto);
    }
}
