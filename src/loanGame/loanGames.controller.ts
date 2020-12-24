import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiImplicitParam,
  ApiOkResponse,
  ApiUseTags
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { LoanGameDto } from "./dto/loanGame.dto";
import { CreateLoanGameDto } from "./dto/create-loanGame.dto";
import { UpdateLoanGameDto } from "./dto/update-loanGame.dto";
import { LoanGameOffset } from "./dto/loanGame.offset";
import { LoanGame as LoanGameEntity } from "./loanGame.entity";
import { LoanGamesService } from "./loanGames.service";

@Controller("loanGames")
@ApiUseTags("loanGames")
export class LoanGamesController {
  constructor(private readonly loanGamesService: LoanGamesService) {}

  @Get()
  @ApiOkResponse({ type: [LoanGameDto] })
  findAll(): Promise<LoanGameDto[]> {
    return this.loanGamesService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: LoanGameDto })
  @ApiImplicitParam({ name: "id", required: true })
  findOne(@Param("id", new ParseIntPipe()) id: number): Promise<LoanGameDto> {
    return this.loanGamesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: LoanGameDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createLoanGameDto: CreateLoanGameDto): Promise<LoanGameDto> {
    return this.loanGamesService.create(createLoanGameDto);
  }

  @Put(":id")
  @ApiOkResponse({ type: LoanGameDto })
  @ApiImplicitParam({ name: "id", required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() updateLoanGameDto: UpdateLoanGameDto
  ): Promise<LoanGameDto> {
    return this.loanGamesService.update(id, updateLoanGameDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: LoanGameDto })
  @ApiImplicitParam({ name: "id", required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  delete(@Param("id", new ParseIntPipe()) id: number): Promise<LoanGameDto> {
    return this.loanGamesService.delete(id);
  }

  @Get("offset/:id")
  @ApiOkResponse({ type: LoanGameOffset })
  offset(
    @Param("id", new ParseIntPipe()) index: number = 0
  ): Promise<LoanGameOffset> {
    return this.loanGamesService.offset(index);
  }
}
