import { CreatePantientDto } from './dto/create-pantient.dto';
import { PantientsService } from './pantients.service';
import { Pantient as PantientEntity } from './pantient.entity';
import { PantientDto } from './dto/pantient.dto';
import { UpdatePantientDto } from './dto/update-pantient.dto';
import { PantientOffset } from './dto/pantient.offset';
import { VisitDto } from '../visits/dto/visit.dto';
export declare class PantientsController {
    private readonly pantientsService;
    constructor(pantientsService: PantientsService);
    findAll(): Promise<PantientDto[]>;
    findOne(id: number): Promise<PantientDto>;
    create(createPantientDto: CreatePantientDto): Promise<PantientEntity>;
    update(id: number, updatePantientDto: UpdatePantientDto): Promise<PantientEntity>;
    delete(id: number): Promise<PantientEntity>;
    offset(index?: number): Promise<PantientOffset>;
    pantientVisits(id: number): Promise<VisitDto[]>;
}
