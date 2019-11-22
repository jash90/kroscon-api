import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { EventDto } from './dto/event.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventOffset } from './dto/event.offset';
import { Event as EventEntity } from './event.entity';
import { EventsService } from './events.service';

@Controller('events')
@ApiUseTags('events')
export class EventsController {
    constructor(private readonly EventsService: EventsService) { }

    @Get()
    @ApiOkResponse({ type: [EventDto] })
    findAll(): Promise<EventDto[]> {
        return this.EventsService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: EventDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<EventDto> {
        return this.EventsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: EventEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createEventDto: CreateEventDto,
    ): Promise<EventEntity> {
        return this.EventsService.create(createEventDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: EventEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateEventDto: UpdateEventDto,
    ): Promise<EventEntity> {
        return this.EventsService.update(id, updateEventDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: EventEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<EventEntity> {
        return this.EventsService.delete(id);
    }

    @Get(':id')
    @ApiOkResponse({ type: EventOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<EventOffset> {
        return this.EventsService.offset(index);
    }


}
