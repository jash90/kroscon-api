import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { PublisherDto } from './dto/publisher.dto';
import { PublisherOffset } from './dto/publisher.offset';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './publisher.entity';

@Injectable()
export class PublishersService {
  constructor(
    @Inject('PublishersRepository')
    private readonly publishersRepository: Repository<Publisher>,
  ) {}

  async findAll(): Promise<PublisherDto[]> {
    const publishers = await this.publishersRepository.find({
      relations: ['boardGames'],
    });
    return publishers.map(publisher => {
      return new PublisherDto(publisher);
    });
  }

  async findOne(id: number): Promise<PublisherDto> {
    const publisher = await this.publishersRepository.findOne(id, {
      relations: ['boardGames'],
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
      return new PublisherDto(await getRepository(Publisher).save(publisher));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getPublisher(id: number): Promise<Publisher> {
    const publisher = await this.publishersRepository.findOne(id, {
      relations: ['boardGames'],
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
      return new PublisherDto(await getRepository(Publisher).save(publisher));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<PublisherDto> {
    const publisher = await this.getPublisher(id);
    return new PublisherDto(await getRepository(Publisher).remove(publisher));
  }

  async offset(index: number = 0): Promise<PublisherOffset> {
    const publishers = await this.publishersRepository.findAndCount({
      relations: ['boardGames'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const PublishersDto = publishers[0].map(publisher => {
      return new PublisherDto(publisher);
    });

    return { rows: PublishersDto, count: publishers[1] };
  }
}
