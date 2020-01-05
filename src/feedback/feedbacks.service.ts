import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Feedback } from 'src/feedback/feedback.entity';
import { FeedbackDto } from 'src/feedback/dto/feedback.dto';
import { CreateFeedbackDto } from 'src/feedback/dto/create-feedback.dto';
import { UpdateFeedbackDto } from 'src/feedback/dto/update-feedback.dto';
import { FeedbackOffset } from 'src/feedback/dto/feedback.offset';
import { User } from 'src/users/user.entity';
import { BoardGame } from 'src/boardGame/boardGame.entity';
import { LoanGame } from 'src/loanGame/loanGame.entity';

@Injectable()
export class FeedbacksService {
    constructor(
        @Inject('FeedbacksRepository')
        private readonly feedbacksRepository: typeof Feedback,
    ) { }

    async findAll(): Promise<FeedbackDto[]> {
        const feedbacks = await this.feedbacksRepository.findAll<Feedback>({
            include: [User, BoardGame, LoanGame],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return feedbacks.map(feedback => {
            return new FeedbackDto(feedback);
        });
    }

    async findOne(id: number): Promise<FeedbackDto> {
        const feedback = await this.feedbacksRepository.findByPk<Feedback>(id, {
            include: [User, BoardGame, LoanGame],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!feedback) {
            throw new HttpException('No feedback found', HttpStatus.NOT_FOUND);
        }

        return new FeedbackDto(feedback);
    }

    async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
        const feedback = new Feedback();
        feedback.rating = createFeedbackDto.rating;
        feedback.userId = createFeedbackDto.userId;
        feedback.loanGameId = createFeedbackDto.loanGameId;
        feedback.boardGameId = createFeedbackDto.boardGameId;

        try {
            return await feedback.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getFeedback(id: number): Promise<Feedback> {
        const feedback = await this.feedbacksRepository.findByPk<Feedback>(id, {
            include: [User, BoardGame, LoanGame],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!feedback) {
            throw new HttpException('No feedback found', HttpStatus.NOT_FOUND);
        }

        return feedback;
    }

    async update(
        id: number,
        updateFeedbackDto: UpdateFeedbackDto,
    ): Promise<Feedback> {
        const feedback = await this.getFeedback(id);

        feedback.rating = updateFeedbackDto.rating || feedback.rating;
        feedback.userId = updateFeedbackDto.userId || feedback.userId;
        feedback.boardGameId = updateFeedbackDto.boardGameId || feedback.boardGameId;
        feedback.loanGameId = updateFeedbackDto.loanGameId || feedback.loanGameId;

        try {
            return await feedback.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Feedback> {
        const feedback = await this.getFeedback(id);
        await feedback.destroy();
        return feedback;
    }

    async offset(index: number = 0): Promise<FeedbackOffset> {
        const feedbacks = await this.feedbacksRepository.findAndCountAll({
            include: [User, BoardGame, LoanGame],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const FeedbacksDto = feedbacks.rows.map(feedback => {
            return new FeedbacksDto(feedback);
        });

        return { rows: FeedbacksDto, count: feedbacks.count };
    }

}
