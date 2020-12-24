import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Lecture } from "../lecture/lecture.entity";
import { LectureDto } from "../lecture/dto/lecture.dto";
import { CreateLectureDto } from "../lecture/dto/create-lecture.dto";
import { UpdateLectureDto } from "../lecture/dto/update-lecture.dto";
import { LectureOffset } from "../lecture/dto/lecture.offset";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class LecturesService {
  constructor(
    @Inject("LecturesRepository")
    private readonly lecturesRepository: Repository<Lecture>
  ) {}

  async findAll(): Promise<LectureDto[]> {
    const lectures = await this.lecturesRepository.find({
      relations: ["event"]
    });
    return lectures.map(lecture => {
      return new LectureDto(lecture);
    });
  }

  async findOne(id: number): Promise<LectureDto> {
    const lecture = await this.lecturesRepository.findOne(id, {
      relations: ["event"]
    });
    if (!lecture) {
      throw new HttpException("No lecture found", HttpStatus.NOT_FOUND);
    }

    return new LectureDto(lecture);
  }

  async create(createLectureDto: CreateLectureDto): Promise<LectureDto> {
    const lecture = new Lecture();

    lecture.name = createLectureDto.name;
    lecture.start = createLectureDto.start;
    lecture.end = createLectureDto.end;

    try {
      return new LectureDto(await getRepository(Lecture).save(lecture));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getLecture(id: number): Promise<Lecture> {
    const lecture = await this.lecturesRepository.findOne(id, {
      relations: ["event"]
    });
    if (!lecture) {
      throw new HttpException("No lecture found", HttpStatus.NOT_FOUND);
    }

    return lecture;
  }

  async update(
    id: number,
    updateLectureDto: UpdateLectureDto
  ): Promise<LectureDto> {
    const lecture = await this.getLecture(id);

    lecture.name = updateLectureDto.name || lecture.name;
    lecture.start = updateLectureDto.start || lecture.start;
    lecture.end = updateLectureDto.end || lecture.end;

    try {
      return new LectureDto(await getRepository(Lecture).save(lecture));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<LectureDto> {
    const lecture = await this.getLecture(id);
    return new LectureDto(await getRepository(Lecture).remove(lecture));
  }

  async offset(index: number = 0): Promise<LectureOffset> {
    const lectures = await this.lecturesRepository.findAndCount({
      relations: ["event"],
      take: 100,
      skip: index * 100,
      order: {
        id: "ASC"
      }
    });

    const LecturesDto = lectures[0].map(lecture => {
      return new LecturesDto(lecture);
    });

    return { rows: LecturesDto, count: lectures[1] };
  }
}
