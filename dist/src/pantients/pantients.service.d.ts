import { CreatePantientDto } from './dto/create-pantient.dto';
import { Pantient } from './pantient.entity';
import { PantientDto } from './dto/pantient.dto';
import { UpdatePantientDto } from './dto/update-pantient.dto';
import { PantientOffset } from './dto/pantient.offset';
import { VisitDto } from '../visits/dto/visit.dto';
export declare class PantientsService {
    private readonly pantientsRepository;
    constructor(pantientsRepository: typeof Pantient);
    findAll(): Promise<PantientDto[]>;
    findOne(id: number): Promise<PantientDto>;
    create(createPantientDto: CreatePantientDto): Promise<Pantient>;
    private getPantient;
    update(id: number, updatePantientDto: UpdatePantientDto): Promise<Pantient>;
    delete(id: number): Promise<Pantient>;
    offset(index?: number): Promise<PantientOffset>;
    pantientVisits(id: number): Promise<VisitDto[]>;
}
