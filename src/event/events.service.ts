import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Event } from "../event/event.entity";
import { EventDto } from "../event/dto/event.dto";
import { CreateEventDto } from "../event/dto/create-event.dto";
import { UpdateEventDto } from "../event/dto/update-event.dto";
import { EventOffset } from "../event/dto/event.offset";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class EventsService {
  constructor(
    @Inject("EventsRepository")
    private readonly eventsRepository: Repository<Event>
  ) {}

  async findAll(): Promise<EventDto[]> {
    const events = await this.eventsRepository.find({
      relations: ["lecture"]
    });
    return events.map(event => {
      return new EventDto(event);
    });
  }

  async findOne(id: number): Promise<EventDto> {
    const event = await this.eventsRepository.findOne(id, {
      relations: ["lecture"]
    });
    if (!event) {
      throw new HttpException("No event found", HttpStatus.NOT_FOUND);
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
      relations: ["lecture"]
    });
    if (!event) {
      throw new HttpException("No event found", HttpStatus.NOT_FOUND);
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

  async offset(index: number = 0): Promise<EventOffset> {
    const events = await this.eventsRepository.findAndCount({
      relations: ["lecture"],
      take: 100,
      skip: index * 100,
      order: {
        id: "ASC"
      }
    });

    const EventDto = events[0].map(event => {
      return new EventDto(event);
    });

    return { rows: EventDto, count: events[1] };
  }
}
