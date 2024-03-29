import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CreateLoanGameDto } from './dto/create-loanGame.dto';
import { LoanGameDto } from './dto/loanGame.dto';
import { LoanGameOffset } from './dto/loanGame.offset';
import { UpdateLoanGameDto } from './dto/update-loanGame.dto';
import { LoanGame } from './loanGame.entity';

@Injectable()
export class LoanGamesService {
  constructor(
    @Inject('LoanGamesRepository')
    private readonly loanGamesRepository: Repository<LoanGame>,
  ) {}

  async findAll(): Promise<LoanGameDto[]> {
    const loanGames = await this.loanGamesRepository.find({
      relations: ['user', 'boardGame', 'table', 'hireUser'],
    });
    return loanGames.map((loanGame) => {
      return new LoanGameDto(loanGame);
    });
  }

  async findOne(id: number): Promise<LoanGameDto> {
    const loanGame = await this.loanGamesRepository.findOne(id, {
      relations: ['user', 'boardGame', 'table', 'hireUser'],
    });
    if (!loanGame) {
      throw new HttpException('No loanGame found', HttpStatus.NOT_FOUND);
    }

    return new LoanGameDto(loanGame);
  }

  async create(createLoanGameDto: CreateLoanGameDto): Promise<LoanGameDto> {
    const loanGame = new LoanGame();
    loanGame.start = createLoanGameDto.start;
    loanGame.end = null;

    try {
      return new LoanGameDto(await getRepository(LoanGame).save(loanGame));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getLoanGame(id: number): Promise<LoanGame> {
    const loanGame = await this.loanGamesRepository.findOne(id, {
      relations: ['user', 'boardGame', 'table', 'hireUser'],
    });
    if (!loanGame) {
      throw new HttpException('No loanGame found', HttpStatus.NOT_FOUND);
    }

    return loanGame;
  }

  async update(
    id: number,
    updateLoanGameDto: UpdateLoanGameDto,
  ): Promise<LoanGameDto> {
    const loanGame = await this.getLoanGame(id);

    loanGame.start = updateLoanGameDto.start || loanGame.start;
    loanGame.end = updateLoanGameDto.end || loanGame.end;

    try {
      return new LoanGameDto(await getRepository(LoanGame).save(loanGame));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<LoanGameDto> {
    const loanGame = await this.getLoanGame(id);
    return new LoanGameDto(await getRepository(LoanGame).remove(loanGame));
  }

  async offset(index = 0): Promise<LoanGameOffset> {
    const loanGames = await this.loanGamesRepository.findAndCount({
      relations: ['user', 'boardGame', 'table', 'hireUser'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const LoanGamesDto = loanGames[0].map((loanGame) => {
      return new LoanGamesDto(loanGame);
    });

    return { rows: LoanGamesDto, count: loanGames[1] };
  }
}
