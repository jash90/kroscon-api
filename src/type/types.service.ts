import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Type } from "../type/type.entity";
import { TypeDto } from "../type/dto/type.dto";
import { CreateTypeDto } from "../type/dto/create-type.dto";
import { UpdateTypeDto } from "../type/dto/update-type.dto";
import { TypeOffset } from "../type/dto/type.offset";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class TypesService {
  constructor(
    @Inject("TypesRepository")
    private readonly typesRepository: Repository<Type>
  ) {}

  async findAll(): Promise<TypeDto[]> {
    const types = await this.typesRepository.find({
      relations: ["boardGame"]
    });
    return types.map(type => {
      return new TypeDto(type);
    });
  }

  async findOne(id: number): Promise<TypeDto> {
    const type = await this.typesRepository.findOne(id, {
      relations: ["boardGame"]
    });
    if (!type) {
      throw new HttpException("No type found", HttpStatus.NOT_FOUND);
    }

    return new TypeDto(type);
  }

  async create(createTypeDto: CreateTypeDto): Promise<TypeDto> {
    const type = new Type();
    type.name = createTypeDto.name;

    try {
      return new TypeDto(await getRepository(Type).save(type));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getType(id: number): Promise<Type> {
    const type = await this.typesRepository.findOne(id, {
      relations: ["boardGame"]
    });
    if (!type) {
      throw new HttpException("No type found", HttpStatus.NOT_FOUND);
    }

    return type;
  }

  async update(id: number, updateTypeDto: UpdateTypeDto): Promise<TypeDto> {
    const type = await this.getType(id);

    type.name = updateTypeDto.name || type.name;

    try {
      return new TypeDto(await getRepository(Type).save(type));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<TypeDto> {
    const type = await this.getType(id);
    return new TypeDto(await getRepository(Type).remove(type));
  }

  async offset(index: number = 0): Promise<TypeOffset> {
    const types = await this.typesRepository.findAndCount({
      relations: ["boardGame"],
      take: 100,
      skip: index * 100,
      order: {
        id: "ASC"
      }
    });

    const TypesDto = types[0].map(type => {
      return new TypeDto(type);
    });

    return { rows: TypesDto, count: types[1] };
  }
}
