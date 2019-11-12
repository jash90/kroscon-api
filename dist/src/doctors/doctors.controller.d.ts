import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorsService } from './doctors.service';
import { Doctor as DoctorEntity } from './doctor.entity';
import { DoctorDto } from './dto/doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorOffset } from './dto/doctor.offset';
import { VisitDto } from '../visits/dto/visit.dto';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    findAll(): Promise<DoctorDto[]>;
    findOne(id: number): Promise<DoctorDto>;
    create(createDoctorDto: CreateDoctorDto): Promise<DoctorEntity>;
    update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<DoctorEntity>;
    delete(id: number): Promise<DoctorEntity>;
    offset(index?: number): Promise<DoctorOffset>;
    pantientVisits(id: number): Promise<VisitDto[]>;
}
