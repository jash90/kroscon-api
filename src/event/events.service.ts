import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { EventDto } from './dto/event.dto';
import { EventOffset } from './dto/event.offset';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './event.entity';

@Injectable()
export class EventsService {
  constructor(
    @Inject('EventsRepository')
    private readonly eventsRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<EventDto[]> {
    const events = await this.eventsRepository.find({
      relations: ['lectures'],
    });
    return events.map((event) => {
      return new EventDto(event);
    });
  }

  async findOne(id: number): Promise<EventDto> {
    const event = await this.eventsRepository.findOne(id, {
      relations: ['lectures'],
    });
    if (!event) {
      throw new HttpException('No event found', HttpStatus.NOT_FOUND);
    }

    return new EventDto(event);
  }

  async create(createEventDto: CreateEventDto): Promise<EventDto> {
    const event = new Event();
    event.name = createEventDto.name;
    event.start = createEventDto.start;
    event.end = createEventDto.end;
    event.description = createEventDto.description;
    event.location = createEventDto.location;

    try {
      return new EventDto(await getRepository(Event).save(event));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getEvent(id: number): Promise<Event> {
    const event = await this.eventsRepository.findOne(id, {
      relations: ['lectures'],
    });
    if (!event) {
      throw new HttpException('No event found', HttpStatus.NOT_FOUND);
    }

    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<EventDto> {
    const event = await this.getEvent(id);

    event.name = updateEventDto.name || event.name;
    event.start = updateEventDto.start || event.start;
    event.end = updateEventDto.end || event.end;
    event.description = updateEventDto.description || event.description;
    event.location = updateEventDto.location || event.location;

    try {
      return new EventDto(await getRepository(Event).save(event));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<EventDto> {
    const event = await this.getEvent(id);
    return new EventDto(await getRepository(Event).remove(event));
  }

  async offset(index = 0): Promise<EventOffset> {
    const events = await this.eventsRepository.findAndCount({
      relations: ['lectures'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const Events = events[0].map((event) => {
      return new EventDto(event);
    });

    return { rows: Events, count: events[1] };
  }
}
