import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Event } from 'src/event/event.entity';
import { EventDto } from 'src/event/dto/event.dto';
import { CreateEventDto } from 'src/event/dto/create-event.dto';
import { UpdateEventDto } from 'src/event/dto/update-event.dto';
import { EventOffset } from 'src/event/dto/event.offset';
import { User } from 'src/users/user.entity';

@Injectable()
export class EventsService {
    constructor(
        @Inject('EventsRepository')
        private readonly eventsRepository: typeof Event,
    ) { }

    async findAll(): Promise<EventDto[]> {
        const events = await this.eventsRepository.findAll<EventDto>({
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return events.map(event => {
            return new EventDto(event);
        });
    }

    async findOne(id: number): Promise<EventDto> {
        const event = await this.eventsRepository.findByPk<Event>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!event) {
            throw new HttpException('No event found', HttpStatus.NOT_FOUND);
        }

        return new EventDto(event);
    }

    async create(CreateEventDto: CreateEventDto): Promise<Event> {
        const event = new Event();
        event.name = CreateEventDto.name;

        try {
            return await event.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getEvent(id: number): Promise<Event> {
        const event = await this.eventsRepository.findByPk<Event>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!event) {
            throw new HttpException('No event found', HttpStatus.NOT_FOUND);
        }

        return event;
    }

    async update(
        id: number,
        updatePrivilegeDto: UpdateEventDto,
    ): Promise<Event> {
        const event = await this.getEvent(id);

        event.name = updatePrivilegeDto.name || event.name;

        try {
            return await event.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Event> {
        const event = await this.getEvent(id);
        await event.destroy();
        return event;
    }

    async offset(index: number = 0): Promise<EventOffset> {
        const events = await this.eventsRepository.findAndCountAll({
            include: [User],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const EventDto = events.rows.map(event => {
            return new EventDto(event);
        });

        return { rows: EventDto, count: events.count };
    }

}
