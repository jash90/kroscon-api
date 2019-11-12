import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorDto } from './dto/doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorOffset } from './dto/doctor.offset';
import { VisitDto } from '../visits/dto/visit.dto';
export declare class DoctorsService {
    private readonly doctorsRepository;
    constructor(doctorsRepository: typeof Doctor);
    findAll(): Promise<DoctorDto[]>;
    findOne(id: number): Promise<DoctorDto>;
    create(createDoctorDto: CreateDoctorDto): Promise<Doctor>;
    private getDoctor;
    update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<Doctor>;
    delete(id: number): Promise<Doctor>;
    offset(index?: number): Promise<DoctorOffset>;
    doctorVisits(id: number): Promise<VisitDto[]>;
}
