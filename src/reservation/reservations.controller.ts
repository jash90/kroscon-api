import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ReservationDto } from './dto/reservation.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationOffset } from './dto/reservation.offset';
import { Reservation as ReservationEntity } from './reservation.entity';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
@ApiUseTags('reservations')
export class ReservationsController {
    constructor(private readonly reservationsService: ReservationsService) { }

    @Get()
    @ApiOkResponse({ type: [ReservationDto] })
    findAll(): Promise<ReservationDto[]> {
        return this.reservationsService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: ReservationDto })
    @ApiImplicitParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<ReservationDto> {
        return this.reservationsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: ReservationEntity })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() createReservationDto: CreateReservationDto,
    ): Promise<ReservationEntity> {
        return this.reservationsService.create(createReservationDto);
    }

    @Put(':id')
    @ApiOkResponse({ type: ReservationEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateReservationDto: UpdateReservationDto,
    ): Promise<ReservationEntity> {
        return this.reservationsService.update(id, updateReservationDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: ReservationEntity })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<ReservationEntity> {
        return this.reservationsService.delete(id);
    }

    @Get('offset/:id')
    @ApiOkResponse({ type: ReservationOffset })
    offset(@Param('id', new ParseIntPipe()) index: number = 0): Promise<ReservationOffset> {
        return this.reservationsService.offset(index);
    }


}
