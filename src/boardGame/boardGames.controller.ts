import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BoardGameDto } from './dto/boardGame.dto';
import { CreateBoardGameDto } from './dto/create-boardGame.dto';
import { UpdateBoardGameDto } from './dto/update-boardGame.dto';
import { BoardGameOffset } from './dto/boardGame.offset';
import { BoardGame as BoardGameEntity } from './boardGame.entity';
import { BoardGamesService } from './boardGames.service';

@Controller('boardGames')
@ApiUseTags('boardGames')
export class BoardGamesController {
    constructor(private readonly boardGamesService: BoardGamesService) { }

    @Get()
    @ApiOkResponse({ type: [BoardGameDto] })
    findAll(): Promise<BoardGameDto[]> {
        return this.boardGamesService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: BoardGameDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<BoardGameDto> {
        return this.boardGamesService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: BoardGameDto })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createBoardGameDto: CreateBoardGameDto,
    ): Promise<BoardGameDto> {
        return this.boardGamesService.create(createBoardGameDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: BoardGameDto })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateBoardGameDto: UpdateBoardGameDto,
    ): Promise<BoardGameDto> {
        return this.boardGamesService.update(id, updateBoardGameDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: BoardGameDto })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<BoardGameDto> {
        return this.boardGamesService.delete(id);
    }

    @Get('offset/:id')
    @ApiOkResponse({ type: BoardGameOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<BoardGameOffset> {
        return this.boardGamesService.offset(index);
    }
}
