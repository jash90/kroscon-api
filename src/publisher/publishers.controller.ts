import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { PublisherDto } from './dto/publisher.dto';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { PublisherOffset } from './dto/publisher.offset';
import { Publisher as PublisherEntity } from './publisher.entity';
import { PublishersService } from './publishers.service';

@Controller('publishers')
@ApiUseTags('publishers')
export class PublishersController {
    constructor(private readonly publishersService: PublishersService) { }

    @Get()
    @ApiOkResponse({ type: [PublisherDto] })
    findAll(): Promise<PublisherDto[]> {
        return this.publishersService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: PublisherDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<PublisherDto> {
        return this.publishersService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: PublisherEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createPublisherDto: CreatePublisherDto,
    ): Promise<PublisherEntity> {
        return this.publishersService.create(createPublisherDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: PublisherEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updatePublisherDto: UpdatePublisherDto,
    ): Promise<PublisherEntity> {
        return this.publishersService.update(id, updatePublisherDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: PublisherEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<PublisherEntity> {
        return this.publishersService.delete(id);
    }
    
    @Get('offset/:id')
    @ApiOkResponse({ type: PublisherOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<PublisherOffset> {
        return this.publishersService.offset(index);
    }


}
