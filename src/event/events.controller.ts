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
import { CreateEventDto } from './dto/create-event.dto';
import { EventDto } from './dto/event.dto';
import { EventOffset } from './dto/event.offset';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsService } from './events.service';

@Controller('events')
@ApiTags('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @ApiOkResponse({ type: [EventDto] })
  findAll(): Promise<EventDto[]> {
    return this.eventsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: EventDto })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<EventDto> {
    return this.eventsService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: EventDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createEventDto: CreateEventDto): Promise<EventDto> {
    return this.eventsService.create(createEventDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: EventDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<EventDto> {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EventDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<EventDto> {
    return this.eventsService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: EventOffset })
  offset(@Param('id', new ParseIntPipe()) index = 0): Promise<EventOffset> {
    return this.eventsService.offset(index);
  }
}
