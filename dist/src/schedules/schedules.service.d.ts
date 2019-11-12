import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedule } from './schedule.entity';
import { ScheduleDto } from './dto/schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleOffset } from './dto/schedules.offset';
import { Doctor } from '../doctors/doctor.entity';
export declare class SchedulesService {
    private readonly schedulesRepository;
    private readonly doctorsRepository;
    constructor(schedulesRepository: typeof Schedule, doctorsRepository: typeof Doctor);
    findAll(): Promise<ScheduleDto[]>;
    findOne(id: number): Promise<ScheduleDto>;
    create(createScheduleDto: CreateScheduleDto): Promise<Schedule>;
    private getSchedule;
    update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<Schedule>;
    delete(id: number): Promise<Schedule>;
    search(doctorId: number): Promise<ScheduleDto[]>;
    offset(index?: number): Promise<ScheduleOffset>;
}
