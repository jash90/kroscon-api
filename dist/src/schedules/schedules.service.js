"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const schedule_entity_1 = require("./schedule.entity");
const schedule_dto_1 = require("./dto/schedule.dto");
const doctor_entity_1 = require("../doctors/doctor.entity");
let SchedulesService = class SchedulesService {
    constructor(schedulesRepository, doctorsRepository) {
        this.schedulesRepository = schedulesRepository;
        this.doctorsRepository = doctorsRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const schedules = yield this.schedulesRepository.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            return schedules.map(schedule => {
                return new schedule_dto_1.ScheduleDto(schedule);
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = yield this.schedulesRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!schedule) {
                throw new common_1.HttpException('No schedule found', common_1.HttpStatus.NOT_FOUND);
            }
            return new schedule_dto_1.ScheduleDto(schedule);
        });
    }
    create(createScheduleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = new schedule_entity_1.Schedule();
            schedule.doctorId = createScheduleDto.doctorId;
            schedule.dayOfWeek = createScheduleDto.dayOfWeek;
            schedule.hourOpen = createScheduleDto.hourOpen;
            schedule.hourClose = createScheduleDto.hourClose;
            const doctor = yield this.doctorsRepository.findByPk(createScheduleDto.doctorId);
            if (!doctor) {
                throw new common_1.HttpException('Doctor not found', common_1.HttpStatus.NOT_FOUND);
            }
            try {
                return yield schedule.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    getSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = yield this.schedulesRepository.findByPk(id);
            if (!schedule) {
                throw new common_1.HttpException('No schedule found', common_1.HttpStatus.NOT_FOUND);
            }
            return schedule;
        });
    }
    update(id, updateScheduleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = yield this.getSchedule(id);
            schedule.doctorId = updateScheduleDto.doctorId || schedule.doctorId;
            schedule.dayOfWeek = updateScheduleDto.dayOfWeek || schedule.dayOfWeek;
            schedule.hourOpen = updateScheduleDto.hourOpen || schedule.hourOpen;
            schedule.hourClose = updateScheduleDto.hourClose || schedule.hourClose;
            const doctor = this.doctorsRepository.findByPk(id);
            if (!doctor) {
                throw new common_1.HttpException('Doctor not found', common_1.HttpStatus.NOT_FOUND);
            }
            try {
                return yield schedule.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = yield this.getSchedule(id);
            yield schedule.destroy();
            return schedule;
        });
    }
    search(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedules = yield this.schedulesRepository.findAll({
                where: {
                    doctorId,
                },
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                order: ['dayOfWeek'],
            });
            return schedules.map(schedule => {
                return new schedule_dto_1.ScheduleDto(schedule);
            });
        });
    }
    offset(index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedules = yield this.schedulesRepository.findAndCountAll({
                include: [doctor_entity_1.Doctor],
                limit: 100,
                offset: index * 100,
                order: ['id'],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            const SchedulesDto = schedules.rows.map(schedule => {
                return new schedule_dto_1.ScheduleDto(schedule);
            });
            return { rows: SchedulesDto, count: schedules.count };
        });
    }
};
SchedulesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('SchedulesRepository')),
    __param(1, common_1.Inject('DoctorsRepository')),
    __metadata("design:paramtypes", [Object, Object])
], SchedulesService);
exports.SchedulesService = SchedulesService;
//# sourceMappingURL=schedules.service.js.map