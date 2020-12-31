import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { BoardGame } from '../boardGame/boardGame.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackDto } from './dto/feedback.dto';
import { FeedbackOffset } from './dto/feedback.offset';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject('FeedbacksRepository')
    private readonly feedbacksRepository: Repository<Feedback>,
  ) {}

  async findAll(): Promise<FeedbackDto[]> {
    const feedbacks = await this.feedbacksRepository.find({
      relations: ['user', 'boardGame', 'loanGame'],
    });
    return feedbacks.map(feedback => {
      return new FeedbackDto(feedback);
    });
  }

  async findOne(id: number): Promise<FeedbackDto> {
    const feedback = await this.feedbacksRepository.findOne(id, {
      relations: ['user', 'boardGame', 'loanGame'],
    });
    if (!feedback) {
      throw new HttpException('No feedback found', HttpStatus.NOT_FOUND);
    }

    return new FeedbackDto(feedback);
  }

  async create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto> {
    const feedback = new Feedback();
    feedback.rating = createFeedbackDto.rating;

    try {
      return new FeedbackDto(await getRepository(Feedback).save(feedback));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getFeedback(id: number): Promise<Feedback> {
    const feedback = await this.feedbacksRepository.findOne(id, {
      relations: ['user', 'boardGame', 'loanGame'],
    });
    if (!feedback) {
      throw new HttpException('No feedback found', HttpStatus.NOT_FOUND);
    }

    return feedback;
  }

  async update(
    id: number,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<FeedbackDto> {
    const feedback = await this.getFeedback(id);

    feedback.rating = updateFeedbackDto.rating || feedback.rating;

    try {
      return new FeedbackDto(await getRepository(Feedback).save(feedback));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<FeedbackDto> {
    const feedback = await this.getFeedback(id);
    return new FeedbackDto(await getRepository(Feedback).save(feedback));
  }

  async offset(index: number = 0): Promise<FeedbackOffset> {
    const feedbacks = await this.feedbacksRepository.findAndCount({
      relations: ['user', 'BoardGame', 'loanGame'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const FeedbacksDto = feedbacks[0].map(feedback => {
      return new FeedbacksDto(feedback);
    });

    return { rows: FeedbacksDto, count: feedbacks[1] };
  }
}
