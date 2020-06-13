import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Publisher } from 'src/publisher/publisher.entity';
import { PublisherDto } from 'src/publisher/dto/publisher.dto';
import { CreatePublisherDto } from 'src/publisher/dto/create-publisher.dto';
import { UpdatePublisherDto } from 'src/publisher/dto/update-publisher.dto';
import { PublisherOffset } from 'src/publisher/dto/publisher.offset';
import { User } from 'src/users/user.entity';
import { BoardGame } from '../boardGame/boardGame.entity';

@Injectable()
export class PublishersService {
    constructor(
        @Inject('PublishersRepository')
        private readonly publishersRepository: typeof Publisher,
    ) { }

    async findAll(): Promise<PublisherDto[]> {
        const publishers = await this.publishersRepository.findAll<Publisher>({
            include: [BoardGame],
        });
        return publishers.map(publisher => {
            return new PublisherDto(publisher);
        });
    }

    async findOne(id: number): Promise<PublisherDto> {
        const publisher = await this.publishersRepository.findByPk<Publisher>(id, {
            include: [BoardGame],
        });
        if (!publisher) {
            throw new HttpException('No publisher found', HttpStatus.NOT_FOUND);
        }

        return new PublisherDto(publisher);
    }

    async create(createPublisherDto: CreatePublisherDto): Promise<PublisherDto> {
        const publisher = new Publisher();
        publisher.name = createPublisherDto.name;

        try {
            const publisherData = await publisher.save();
            return new PublisherDto(publisherData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getPublisher(id: number): Promise<Publisher> {
        const publisher = await this.publishersRepository.findByPk<Publisher>(id, {
            include: [BoardGame],
        });
        if (!publisher) {
            throw new HttpException('No publisher found', HttpStatus.NOT_FOUND);
        }

        return publisher;
    }

    async update(
        id: number,
        updatePublisherDto: UpdatePublisherDto,
    ): Promise<PublisherDto> {
        const publisher = await this.getPublisher(id);

        publisher.name = updatePublisherDto.name || publisher.name;

        try {
            const publisherData = await publisher.save();
            return new PublisherDto(publisherData);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<PublisherDto> {
        const publisher = await this.getPublisher(id);
        await publisher.destroy();
        return new PublisherDto(publisher);
    }

    async offset(index: number = 0): Promise<PublisherOffset> {
        const publishers = await this.publishersRepository.findAndCountAll({
            include: [BoardGame],
            limit: 100,
            offset: index * 100,
            order: ['id'],
        });

        const PublishersDto = publishers.rows.map(publisher => {
            return new PublisherDto(publisher);
        });

        return { rows: PublishersDto, count: publishers.count };
    }

}
