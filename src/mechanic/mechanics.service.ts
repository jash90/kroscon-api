import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Mechanic } from "../mechanic/mechanic.entity";
import { MechanicDto } from "../mechanic/dto/mechanic.dto";
import { CreateMechanicDto } from "../mechanic/dto/create-mechanic.dto";
import { UpdateMechanicDto } from "../mechanic/dto/update-mechanic.dto";
import { MechanicOffset } from "../mechanic/dto/mechanic.offset";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class MechanicsService {
  constructor(
    @Inject("MechanicsRepository")
    private readonly mechanicsRepository: Repository<Mechanic>
  ) {}

  async findAll(): Promise<MechanicDto[]> {
    const mechanics = await this.mechanicsRepository.find({
      relations: ["boardGame"]
    });
    return mechanics.map(mechanic => {
      return new MechanicDto(mechanic);
    });
  }

  async findOne(id: number): Promise<MechanicDto> {
    const mechanic = await this.mechanicsRepository.findOne(id, {
      relations: ["boardGame"]
    });
    if (!mechanic) {
      throw new HttpException("No mechanic found", HttpStatus.NOT_FOUND);
    }

    return new MechanicDto(mechanic);
  }

  async create(createMechanicDto: CreateMechanicDto): Promise<MechanicDto> {
    const mechanic = new Mechanic();
    mechanic.name = createMechanicDto.name;

    try {
      return new MechanicDto(await getRepository(Mechanic).save(mechanic));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getMechanic(id: number): Promise<Mechanic> {
    const mechanic = await this.mechanicsRepository.findOne(id, {
      relations: ["boardGame"]
    });
    if (!mechanic) {
      throw new HttpException("No mechanic found", HttpStatus.NOT_FOUND);
    }

    return mechanic;
  }

  async update(
    id: number,
    updateMechanicDto: UpdateMechanicDto
  ): Promise<MechanicDto> {
    const mechanic = await this.getMechanic(id);

    mechanic.name = updateMechanicDto.name || mechanic.name;

    try {
      return new MechanicDto(await getRepository(Mechanic).save(mechanic));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<MechanicDto> {
    const mechanic = await this.getMechanic(id);
    return new MechanicDto(await getRepository(Mechanic).remove(mechanic));
  }

  async offset(index: number = 0): Promise<MechanicOffset> {
    const mechanics = await this.mechanicsRepository.findAndCount({
      relations: ["boardGame"],
      take: 100,
      skip: index * 100,
      order: {
        id: "ASC"
      }
    });

    const MechanicsDto = mechanics[0].map(mechanic => {
      return new MechanicDto(mechanic);
    });

    return { rows: MechanicsDto, count: mechanics[1] };
  }
}
