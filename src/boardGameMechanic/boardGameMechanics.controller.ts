import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BoardGameMechanicDto } from './dto/boardGameMechanic.dto';
import { CreateBoardGameMechanicDto } from './dto/create-boardGameMechanic.dto';
import { UpdateBoardGameMechanicDto } from './dto/update-boardGameMechanic.dto';
import { BoardGameMechanicOffset } from './dto/boardGameMechanic.offset';
import { BoardGameMechanic as BoardGameMechanicEntity } from './boardGameMechanic.entity';
import { BoardGameMechanicsService } from './boardGameMechanics.service';

@Controller('boardGameMechanics')
@ApiUseTags('boardGameMechanics')
export class BoardGameMechanicsController {
    constructor(private readonly boardGameMechanicsService: BoardGameMechanicsService) { }

    @Get()
    @ApiOkResponse({ type: [BoardGameMechanicDto] })
    findAll(): Promise<BoardGameMechanicDto[]> {
        return this.boardGameMechanicsService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: BoardGameMechanicDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<BoardGameMechanicDto> {
        return this.boardGameMechanicsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: BoardGameMechanicEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createBoardGameMechanicDto: CreateBoardGameMechanicDto,
    ): Promise<BoardGameMechanicEntity> {
        return this.boardGameMechanicsService.create(createBoardGameMechanicDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: BoardGameMechanicEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateBoardGameMechanicDto: UpdateBoardGameMechanicDto,
    ): Promise<BoardGameMechanicEntity> {
        return this.boardGameMechanicsService.update(id, updateBoardGameMechanicDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: BoardGameMechanicEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<BoardGameMechanicEntity> {
        return this.boardGameMechanicsService.delete(id);
    }

    @Get('offset/:id')
    @ApiOkResponse({ type: BoardGameMechanicOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<BoardGameMechanicOffset> {
        return this.boardGameMechanicsService.offset(index);
    }


}
