import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { ApiBearerAuth, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOffset } from './dto/user.offset';

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
