import { CreateVisitDto } from './dto/create-visit.dto';
import { VisitsService } from './visits.service';
import { Visit as VisitEntity } from './visit.entity';
import { VisitDto } from './dto/visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { VisitOffset } from './dto/visit.offset';
export declare class VisitsController {
    private readonly visitsService;
    constructor(visitsService: VisitsService);
    findAll(): Promise<VisitDto[]>;
    findOne(id: number): Promise<VisitDto>;
    create(createVisitDto: CreateVisitDto): Promise<VisitEntity>;
    update(id: number, updateVisitDto: UpdateVisitDto): Promise<VisitEntity>;
    delete(id: number): Promise<VisitEntity>;
    offset(index?: number): Promise<VisitOffset>;
    freeVisit(index: number): Promise<string[]>;
    search(doctorId: number): Promise<VisitDto[]>;
}
