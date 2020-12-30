import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiBearerAuth, ApiCreatedResponse, ApiImplicitParam, ApiOkResponse, ApiUseTags} from '@nestjs/swagger';
import {CreateReservationDto} from './dto/create-reservation.dto';
import {ReservationDto} from './dto/reservation.dto';
import {ReservationOffset} from './dto/reservation.offset';
import {UpdateReservationDto} from './dto/update-reservation.dto';
import {ReservationsService} from './reservations.service';

@Controller('reservations')
@ApiUseTags('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  @ApiOkResponse({ type: [ReservationDto] })
  findAll(): Promise<ReservationDto[]> {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ReservationDto })
  @ApiImplicitParam({ name: 'id', required: true })
  findOne(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<ReservationDto> {
    return this.reservationsService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: ReservationDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<ReservationDto> {
    return this.reservationsService.create(createReservationDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: ReservationDto })
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ): Promise<ReservationDto> {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ReservationDto })
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<ReservationDto> {
    return this.reservationsService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: ReservationOffset })
  offset(
    @Param('id', new ParseIntPipe()) index: number = 0,
  ): Promise<ReservationOffset> {
    return this.reservationsService.offset(index);
  }
}
