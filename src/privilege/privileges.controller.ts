import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { PrivilegeDto } from './dto/privilege.dto';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { PrivilegeOffset } from './dto/privilege.offset';
import { Privilege as PrivilegeEntity } from './privilege.entity';
import { PrivilegesService } from './privileges.service';

@Controller('privileges')
@ApiUseTags('privileges')
export class PrivilegesController {
    constructor(private readonly privilegesService: PrivilegesService) { }

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
    @ApiCreatedResponse({ type: PrivilegeEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createPrivilegeDto: CreatePrivilegeDto,
    ): Promise<PrivilegeEntity> {
        return this.privilegesService.create(createPrivilegeDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: PrivilegeEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updatePrivilegeDto: UpdatePrivilegeDto,
    ): Promise<PrivilegeEntity> {
        return this.privilegesService.update(id, updatePrivilegeDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: PrivilegeEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<PrivilegeEntity> {
        return this.privilegesService.delete(id);
    }

    @Get(':id')
    @ApiOkResponse({ type: PrivilegeOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<PrivilegeOffset> {
        return this.privilegesService.offset(index);
    }


}
