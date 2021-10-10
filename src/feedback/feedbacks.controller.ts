import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiParam,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackDto } from './dto/feedback.dto';
import { FeedbackOffset } from './dto/feedback.offset';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
@ApiTags('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Get()
  @ApiOkResponse({ type: [FeedbackDto] })
  findAll(): Promise<FeedbackDto[]> {
    return this.feedbacksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FeedbackDto })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<FeedbackDto> {
    return this.feedbacksService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: FeedbackDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto> {
    return this.feedbacksService.create(createFeedbackDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: FeedbackDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<FeedbackDto> {
    return this.feedbacksService.update(id, updateFeedbackDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FeedbackDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<FeedbackDto> {
    return this.feedbacksService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: FeedbackOffset })
  offset(@Param('id', new ParseIntPipe()) index = 0): Promise<FeedbackOffset> {
    return this.feedbacksService.offset(index);
  }
}
