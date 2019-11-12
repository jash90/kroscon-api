import { CreateScheduleDto } from './dto/create-schedule.dto';
import { SchedulesService } from './schedules.service';
import { Schedule as ScheduleEntity } from './schedule.entity';
import { ScheduleDto } from './dto/schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleOffset } from './dto/schedules.offset';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    findAll(): Promise<ScheduleDto[]>;
    findOne(id: number): Promise<ScheduleDto>;
    create(createScheduleDto: CreateScheduleDto): Promise<ScheduleEntity>;
    update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<ScheduleEntity>;
    delete(id: number): Promise<ScheduleEntity>;
    search(id: number): Promise<ScheduleDto[]>;
    offset(index?: number): Promise<ScheduleOffset>;
}
