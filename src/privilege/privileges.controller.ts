import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags} from '@nestjs/swagger';
import {CreatePrivilegeDto} from './dto/create-privilege.dto';
import {PrivilegeDto} from './dto/privilege.dto';
import {PrivilegeOffset} from './dto/privilege.offset';
import {UpdatePrivilegeDto} from './dto/update-privilege.dto';
import {PrivilegesService} from './privileges.service';

@Controller('privileges')
@ApiUseTags('privileges')
export class PrivilegesController {
  constructor(private readonly privilegesService: PrivilegesService) {}

  @Get()
  @ApiOkResponse({ type: [PrivilegeDto] })
  findAll(): Promise<PrivilegeDto[]> {
    return this.privilegesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PrivilegeDto })
  @ApiImplicitParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<PrivilegeDto> {
    return this.privilegesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: PrivilegeDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createPrivilegeDto: CreatePrivilegeDto,
  ): Promise<PrivilegeDto> {
    return this.privilegesService.create(createPrivilegeDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: PrivilegeDto })
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updatePrivilegeDto: UpdatePrivilegeDto,
  ): Promise<PrivilegeDto> {
    return this.privilegesService.update(id, updatePrivilegeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PrivilegeDto })
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<PrivilegeDto> {
    return this.privilegesService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: PrivilegeOffset })
  offset(
    @Param('id', new ParseIntPipe()) index: number = 0,
  ): Promise<PrivilegeOffset> {
    return this.privilegesService.offset(index);
  }
}
