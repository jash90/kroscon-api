import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Publisher } from 'src/publisher/publisher.entity';
import { PublisherDto } from 'src/publisher/dto/publisher.dto';
import { CreatePublisherDto } from 'src/publisher/dto/create-publisher.dto';
import { UpdatePublisherDto } from 'src/publisher/dto/update-publisher.dto';
import { PublisherOffset } from 'src/publisher/dto/publisher.offset';
import { User } from 'src/users/user.entity';

@Injectable()
export class PublishersService {
    constructor(
        @Inject('PublishersRepository')
        private readonly publishersRepository: typeof Publisher,
    ) { }

    async findAll(): Promise<PublisherDto[]> {
        const publishers = await this.publishersRepository.findAll<Publisher>({
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return publishers.map(publisher => {
            return new PublisherDto(publisher);
        });
    }

    async findOne(id: number): Promise<PublisherDto> {
        const publisher = await this.publishersRepository.findByPk<Publisher>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!publisher) {
            throw new HttpException('No publisher found', HttpStatus.NOT_FOUND);
        }

        return new PublisherDto(publisher);
    }

    async create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
        const publisher = new Publisher();
        publisher.name = createPublisherDto.name;

        try {
            return await publisher.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getPublisher(id: number): Promise<Publisher> {
        const publisher = await this.publishersRepository.findByPk<Publisher>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!publisher) {
            throw new HttpException('No publisher found', HttpStatus.NOT_FOUND);
        }

        return publisher;
    }

    async update(
        id: number,
        updatePublisherDto: UpdatePublisherDto,
    ): Promise<Publisher> {
        const publisher = await this.getPublisher(id);

        publisher.name = updatePublisherDto.name || publisher.name;

        try {
            return await publisher.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Publisher> {
        const publisher = await this.getPublisher(id);
        await publisher.destroy();
        return publisher;
    }

    async offset(index: number = 0): Promise<PublisherOffset> {
        const publishers = await this.publishersRepository.findAndCountAll({
            include: [User],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const PublishersDto = publishers.rows.map(publisher => {
            return new PublishersDto(publisher);
        });

        return { rows: PublishersDto, count: publishers.count };
    }

}
