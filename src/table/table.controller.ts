import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiParam,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTableDto } from './dto/create-table.dto';
import { TableDto } from './dto/table.dto';
import { TableOffset } from './dto/table.offset';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableService } from './table.service';

@Controller('tables')
@ApiTags('tables')
export class TableController {
  constructor(private readonly tablesService: TableService) {}

  @Get()
  @ApiOkResponse({ type: [TableDto] })
  findAll(): Promise<TableDto[]> {
    return this.tablesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TableDto })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<TableDto> {
    return this.tablesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: TableDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPublisherDto: CreateTableDto): Promise<TableDto> {
    return this.tablesService.create(CreateTableDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: TableDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<TableDto> {
    return this.tablesService.update(id, updateTableDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TableDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<TableDto> {
    return this.tablesService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: TableOffset })
  offset(@Param('id', new ParseIntPipe()) index = 0): Promise<TableOffset> {
    return this.tablesService.offset(index);
  }
}
