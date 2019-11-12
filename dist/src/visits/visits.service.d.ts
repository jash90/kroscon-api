import { CreateVisitDto } from './dto/create-visit.dto';
import { Visit } from './visit.entity';
import { VisitDto } from './dto/visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Doctor } from '../doctors/doctor.entity';
import { Pantient } from '../pantients/pantient.entity';
import { VisitOffset } from './dto/visit.offset';
import { Schedule } from '../schedules/schedule.entity';
export declare class VisitsService {
    private readonly visitsRepository;
    private readonly schedulesRepository;
    private readonly doctorsRepository;
    private readonly pantientsRepository;
    constructor(visitsRepository: typeof Visit, schedulesRepository: typeof Schedule, doctorsRepository: typeof Doctor, pantientsRepository: typeof Pantient);
    findAll(): Promise<VisitDto[]>;
    findOne(id: number): Promise<VisitDto>;
    create(createVisitDto: CreateVisitDto): Promise<Visit>;
    private getVisit;
    update(id: number, updateVisitDto: UpdateVisitDto): Promise<Visit>;
    delete(id: number): Promise<Visit>;
    offset(index?: number): Promise<VisitOffset>;
    freeVisit(doctorId: number): Promise<string[]>;
    search(doctorId: number): Promise<VisitDto[]>;
    dateVisits(date: Date): Promise<Visit | null>;
}
