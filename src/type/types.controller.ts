import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags} from '@nestjs/swagger';
import {CreateTypeDto} from './dto/create-type.dto';
import {TypeDto} from './dto/type.dto';
import {TypeOffset} from './dto/type.offset';
import {UpdateTypeDto} from './dto/update-type.dto';
import {TypesService} from './types.service';

@Controller('types')
@ApiUseTags('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  @ApiOkResponse({ type: [TypeDto] })
  findAll(): Promise<TypeDto[]> {
    return this.typesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TypeDto })
  @ApiImplicitParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<TypeDto> {
    return this.typesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: TypeDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTypeDto: CreateTypeDto): Promise<TypeDto> {
    return this.typesService.create(createTypeDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: TypeDto })
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateTypeDto: UpdateTypeDto,
  ): Promise<TypeDto> {
    return this.typesService.update(id, updateTypeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TypeDto })
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<TypeDto> {
    return this.typesService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: TypeOffset })
  offset(
    @Param('id', new ParseIntPipe()) index: number = 0,
  ): Promise<TypeOffset> {
    return this.typesService.offset(index);
  }
}
