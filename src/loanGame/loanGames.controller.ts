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
import { CreateLoanGameDto } from './dto/create-loanGame.dto';
import { LoanGameDto } from './dto/loanGame.dto';
import { LoanGameOffset } from './dto/loanGame.offset';
import { UpdateLoanGameDto } from './dto/update-loanGame.dto';
import { LoanGamesService } from './loanGames.service';

@Controller('loanGames')
@ApiTags('loanGames')
export class LoanGamesController {
  constructor(private readonly loanGamesService: LoanGamesService) {}

  @Get()
  @ApiOkResponse({ type: [LoanGameDto] })
  findAll(): Promise<LoanGameDto[]> {
    return this.loanGamesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LoanGameDto })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<LoanGameDto> {
    return this.loanGamesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: LoanGameDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createLoanGameDto: CreateLoanGameDto): Promise<LoanGameDto> {
    return this.loanGamesService.create(createLoanGameDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: LoanGameDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateLoanGameDto: UpdateLoanGameDto,
  ): Promise<LoanGameDto> {
    return this.loanGamesService.update(id, updateLoanGameDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: LoanGameDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<LoanGameDto> {
    return this.loanGamesService.delete(id);
  }

  @Get('offset/:id')
  @ApiOkResponse({ type: LoanGameOffset })
  offset(@Param('id', new ParseIntPipe()) index = 0): Promise<LoanGameOffset> {
    return this.loanGamesService.offset(index);
  }
}
