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
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { PublisherDto } from './dto/publisher.dto';
import { PublisherOffset } from './dto/publisher.offset';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { PublishersService } from './publishers.service';

@Controller('publishers')
@ApiTags('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Get()
  @ApiOkResponse({ type: [PublisherDto] })
  findAll(): Promise<PublisherDto[]> {
    return this.publishersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PublisherDto })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<PublisherDto> {
    return this.publishersService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: PublisherDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createPublisherDto: CreatePublisherDto,
  ): Promise<PublisherDto> {
    return this.publishersService.create(createPublisherDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: PublisherDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ): Promise<PublisherDto> {
    return this.publishersService.update(id, updatePublisherDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PublisherDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<PublisherDto> {
    return this.publishersService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: PublisherOffset })
  offset(@Param('id', new ParseIntPipe()) index = 0): Promise<PublisherOffset> {
    return this.publishersService.offset(index);
  }
}
