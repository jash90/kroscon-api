import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Lecture } from 'src/lecture/lecture.entity';
import { LectureDto } from 'src/lecture/dto/lecture.dto';
import { CreateLectureDto } from 'src/lecture/dto/create-lecture.dto';
import { UpdateLectureDto } from 'src/lecture/dto/update-lecture.dto';
import { LectureOffset } from 'src/lecture/dto/lecture.offset';
import { User } from 'src/users/user.entity';

@Injectable()
export class LecturesService {
    constructor(
        @Inject('LecturesRepository')
        private readonly lecturesRepository: typeof Lecture,
    ) { }

    async findAll(): Promise<LectureDto[]> {
        const lectures = await this.lecturesRepository.findAll<Lecture>({
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        return lectures.map(lecture => {
            return new LectureDto(lecture);
        });
    }

    async findOne(id: number): Promise<LectureDto> {
        const lecture = await this.lecturesRepository.findByPk<Lecture>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!lecture) {
            throw new HttpException('No lecture found', HttpStatus.NOT_FOUND);
        }

        return new LectureDto(lecture);
    }

    async create(createLectureDto: CreateLectureDto): Promise<Lecture> {
        const lecture = new Lecture();
        lecture.name = createLectureDto.name;

        try {
            return await lecture.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getLecture(id: number): Promise<Lecture> {
        const lecture = await this.lecturesRepository.findByPk<Lecture>(id, {
            include: [User],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });
        if (!lecture) {
            throw new HttpException('No lecture found', HttpStatus.NOT_FOUND);
        }

        return lecture;
    }

    async update(
        id: number,
        updateLectureDto: UpdateLectureDto,
    ): Promise<Lecture> {
        const lecture = await this.getLecture(id);

        lecture.name = updateLectureDto.name || lecture.name;

        try {
            return await lecture.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Lecture> {
        const lecture = await this.getLecture(id);
        await lecture.destroy();
        return lecture;
    }

    async offset(index: number = 0): Promise<LectureOffset> {
        const lectures = await this.lecturesRepository.findAndCountAll({
            include: [User],
            limit: 100,
            offset: index * 100,
            order: ['id'],
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        const LecturesDto = lectures.rows.map(lecture => {
            return new LecturesDto(lecture);
        });

        return { rows: LecturesDto, count: lectures.count };
    }

}
