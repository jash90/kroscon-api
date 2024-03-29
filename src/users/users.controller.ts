import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiParam,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserOffset } from './dto/user.offset';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: [UserDto] })
  findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: UserDto })
  @ApiParam({ name: 'id', required: true })
  async getUser(@Param('id', new ParseIntPipe()) id): Promise<UserDto> {
    return this.usersService.getUser(id);
  }

  @Put('me')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: UserDto })
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Req() request,
  ): Promise<UserDto> {
    return this.usersService.update(request.user.id, updateUserDto);
  }

  @Delete('me')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: UserDto })
  delete(@Req() request): Promise<UserDto> {
    return this.usersService.delete(request.user.id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: UserOffset })
  offset(@Param('id', new ParseIntPipe()) index = 0): Promise<UserOffset> {
    return this.usersService.offset(index);
  }
}
