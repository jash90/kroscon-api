import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MechanicDto } from './dto/mechanic.dto';
import { CreateMechanicDto } from './dto/create-mechanic.dto';
import { UpdateMechanicDto } from './dto/update-mechanic.dto';
import { MechanicOffset } from './dto/mechanic.offset';
import { Mechanic as MechanicEntity } from './mechanic.entity';
import { MechanicsService } from './mechanics.service';

@Controller('mechanics')
@ApiUseTags('mechanics')
export class MechanicsController {
    constructor(private readonly mechanicsService: MechanicsService) { }

    @Get()
    @ApiOkResponse({ type: [MechanicDto] })
    findAll(): Promise<MechanicDto[]> {
        return this.mechanicsService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: MechanicDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<MechanicDto> {
        return this.mechanicsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: MechanicEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createMechanicDto: CreateMechanicDto,
    ): Promise<MechanicEntity> {
        return this.mechanicsService.create(createMechanicDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: MechanicEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateMechanicDto: UpdateMechanicDto,
    ): Promise<MechanicEntity> {
        return this.mechanicsService.update(id, updateMechanicDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: MechanicEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<MechanicEntity> {
        return this.mechanicsService.delete(id);
    }

    @Get(':id')
    @ApiOkResponse({ type: MechanicOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<MechanicOffset> {
        return this.mechanicsService.offset(index);
    }


}
