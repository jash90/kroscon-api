import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FeedbackDto } from './dto/feedback.dto';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackOffset } from './dto/feedback.offset';
import { Feedback as FeedbackEntity } from './feedback.entity';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
@ApiUseTags('feedbacks')
export class FeedbacksController {
    constructor(private readonly feedbacksService: FeedbacksService) { }

    @Get()
    @ApiOkResponse({ type: [FeedbackDto] })
    findAll(): Promise<FeedbackDto[]> {
        return this.feedbacksService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: FeedbackDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<FeedbackDto> {
        return this.feedbacksService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: FeedbackEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createFeedbackDto: CreateFeedbackDto,
    ): Promise<FeedbackEntity> {
        return this.feedbacksService.create(createFeedbackDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: FeedbackEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateFeedbackDto: UpdateFeedbackDto,
    ): Promise<FeedbackEntity> {
        return this.feedbacksService.update(id, updateFeedbackDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: FeedbackEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<FeedbackEntity> {
        return this.feedbacksService.delete(id);
    }

    @Get(':id')
    @ApiOkResponse({ type: FeedbackOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<FeedbackOffset> {
        return this.feedbacksService.offset(index);
    }


}
