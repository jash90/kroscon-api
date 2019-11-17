import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BoardGameTypeDto } from './dto/boardGameType.dto';
import { CreateBoardGameTypeDto } from './dto/create-boardGameType.dto';
import { UpdateBoardGameTypeDto } from './dto/update-boardGameType.dto';
import { BoardGameTypeOffset } from './dto/boardGameType.offset';
import { BoardGameType as BoardGameTypeEntity } from './boardGameType.entity';
import { BoardGameTypesService } from './boardGameTypes.service';

@Controller('boardGameTypes')
@ApiUseTags('boardGameTypes')
export class BoardGameTypesController {
    constructor(private readonly boardGameTypesService: BoardGameTypesService) { }

    @Get()
    @ApiOkResponse({ type: [BoardGameTypeDto] })
    findAll(): Promise<BoardGameTypeDto[]> {
        return this.boardGameTypesService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: BoardGameTypeDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<BoardGameTypeDto> {
        return this.boardGameTypesService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: BoardGameTypeEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createBoardGameTypeDto: CreateBoardGameTypeDto,
    ): Promise<BoardGameTypeEntity> {
        return this.boardGameTypesService.create(createBoardGameTypeDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: BoardGameTypeEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateBoardGameTypeDto: UpdateBoardGameTypeDto,
    ): Promise<BoardGameTypeEntity> {
        return this.boardGameTypesService.update(id, updateBoardGameTypeDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: BoardGameTypeEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<BoardGameTypeEntity> {
        return this.boardGameTypesService.delete(id);
    }

    @Get(':id')
    @ApiOkResponse({ type: BoardGameTypeOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<BoardGameTypeOffset> {
        return this.boardGameTypesService.offset(index);
    }


}
